const {
  createSession,
  findSessionByRefreshToken,
  deleteSession,
  deleteAllSessions,
  getUserSessions,
  deleteSessionById,
  deleteOtherSessions,
} = require("../repositories/session.repository");

const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require("../utils/jwt");

const ApiError = require("../utils/apiError");

const createUserSession = async (user, deviceInfo = {}) => {
  const refreshToken = generateRefreshToken({
    id: user.id,
  });

  const session = await createSession({
    userId: user.id,
    refreshToken,
    userAgent: deviceInfo.userAgent,
    ipAddress: deviceInfo.ipAddress,
    browser: deviceInfo.browser,
    os: deviceInfo.os,
    device: deviceInfo.device,
    lastActiveAt: new Date(),
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  const accessToken = generateAccessToken({
    userId: user.id,
    sessionId: session.id,
    role: user.role,
  });
  return {
    accessToken,
    refreshToken,
  };
};

const refreshUserSession = async (refreshToken, deviceInfo = {}) => {
  if (!refreshToken) {
    throw new ApiError(401, "Refresh token missing");
  }

  verifyRefreshToken(refreshToken);

  const session = await findSessionByRefreshToken(refreshToken);

  if (!session) {
    throw new ApiError(401, "Invalid refresh token");
  }

  // Delete old session
  await deleteSession(refreshToken);

  // Create new session
  return createUserSession(session.user, deviceInfo);
};

const deleteUserSession = async (refreshToken) => {
  if (!refreshToken) {
    throw new ApiError(401, "Refresh token missing");
  }

  return deleteSession(refreshToken);
};

const deleteUserSessions = async (userId) => {
  return deleteAllSessions(userId);
};

const getSessions = async (userId) => {
  return getUserSessions(userId);
};

const removeSession = async (sessionId) => {
  return deleteSessionById(sessionId);
};

const removeOtherSessions = async (userId, currentSessionId) => {
  return deleteOtherSessions(userId, currentSessionId);
};

module.exports = {
  createUserSession,
  refreshUserSession,
  deleteUserSession,
  deleteUserSessions,
  getSessions,
  removeSession,
  removeOtherSessions,
};
