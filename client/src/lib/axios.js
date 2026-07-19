import axios from "axios";

const getAccessToken = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const persistedRoot = localStorage.getItem("persist:root");
  if (!persistedRoot) {
    return null;
  }

  try {
    const root = JSON.parse(persistedRoot);
    const auth = root.auth ? JSON.parse(root.auth) : null;
    return auth?.accessToken || null;
  } catch (error) {
    return null;
  }
};

const setAccessToken = (token) => {
  if (typeof window === "undefined") {
    return;
  }

  const persistedRoot = localStorage.getItem("persist:root");
  if (!persistedRoot) {
    return;
  }

  try {
    const root = JSON.parse(persistedRoot);
    const auth = root.auth ? JSON.parse(root.auth) : {};
    auth.accessToken = token;
    const updatedRoot = {
      ...root,
      auth: JSON.stringify(auth),
    };
    localStorage.setItem("persist:root", JSON.stringify(updatedRoot));
  } catch (error) {
    // ignore failures updating localStorage
  }
};

const clearAccessToken = () => {
  if (typeof window === "undefined") {
    return;
  }

  const persistedRoot = localStorage.getItem("persist:root");
  if (!persistedRoot) {
    return;
  }

  try {
    const root = JSON.parse(persistedRoot);
    const auth = root.auth ? JSON.parse(root.auth) : {};
    auth.accessToken = null;
    const updatedRoot = {
      ...root,
      auth: JSON.stringify(auth),
    };
    localStorage.setItem("persist:root", JSON.stringify(updatedRoot));
  } catch (error) {
    // ignore failures updating localStorage
  }
};

let isRefreshing = false;
let refreshSubscribers = [];

const subscribeTokenRefresh = (cb) => {
  refreshSubscribers.push(cb);
};

const onRefreshed = (token) => {
  refreshSubscribers.forEach((cb) => cb(token));
  refreshSubscribers = [];
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/auth/refresh-token")
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve) => {
          subscribeTokenRefresh((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(api(originalRequest));
          });
        });
      }

      isRefreshing = true;

      try {
        const { data } = await api.post("/auth/refresh-token");
        const newToken = data.data.accessToken;

        setAccessToken(newToken);
        api.defaults.headers.common.Authorization = `Bearer ${newToken}`;
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        onRefreshed(newToken);
        return api(originalRequest);
      } catch (refreshError) {
        clearAccessToken();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;