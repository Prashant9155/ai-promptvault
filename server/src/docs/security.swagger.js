const securitySchemes = {
  bearerAuth: {
    type: "http",
    scheme: "bearer",
    bearerFormat: "JWT",
    description:
      "JWT access token. Send the token in the Authorization header.\n\nExample:\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIs...",
  },

  refreshTokenCookie: {
    type: "apiKey",
    in: "cookie",
    name: "refreshToken",
    description:
      "HTTP-only refresh token cookie used to issue a new access token.",
  },
};

module.exports = securitySchemes;