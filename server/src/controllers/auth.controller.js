const {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} = require("../validators/auth.validators");
const authService = require("../services/auth.service");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");
const sessionService = require("../services/session.service");
const { cookieOptions } = require("../config/cookie.config");
const getDeviceInfo = require("../utils/deviceInfo");
const emailVerificationService = require("../services/emailVerification.service");
const passwordResetService = require("../services/passwordReset.service");

const register = asyncHandler(async (req, res) => {
  const data = registerSchema.parse(req.body);

  const user = await authService.register(data);

  return res.status(201).json(
    new ApiResponse(201, "User registered successfully", {
      id: user.id,
      email: user.email,
    }),
  );
});

const login = asyncHandler(async (req, res) => {
  const data = loginSchema.parse(req.body);

  const deviceInfo = getDeviceInfo(req);

  const result = await authService.login(data, deviceInfo);

  res.cookie("refreshToken", result.refreshToken, cookieOptions);

  return res.status(200).json(
    new ApiResponse(200, "Login successful", {
      accessToken: result.accessToken,
      user: {
        id: result.user.id,
        email: result.user.email,
        role: result.user.role,
      },
    }),
  );
});

const me = asyncHandler(async (req, res) => {
  const user = await authService.me(req.user.id);

  return res
    .status(200)
    .json(new ApiResponse(200, "User fetched successfully", user));
});

const refreshToken = asyncHandler(async (req, res) => {
  const token = req.cookies.refreshToken;

  const deviceInfo = getDeviceInfo(req);

  const result = await sessionService.refreshUserSession(token, deviceInfo);
  res.cookie("refreshToken", result.refreshToken, cookieOptions);

  return res.status(200).json(
    new ApiResponse(200, "Access token refreshed", {
      accessToken: result.accessToken,
    }),
  );
});

const getSessions = asyncHandler(async (req, res) => {
  const sessions = await sessionService.getSessions(req.user.id);

  return res
    .status(200)
    .json(new ApiResponse(200, "Sessions fetched successfully", sessions));
});


const verifyEmail = asyncHandler(async (req, res) => {
  const { token } = req.query;

  await emailVerificationService.verifyEmail(token);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Email verified successfully"
    )
  );
});

const logout = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  await sessionService.deleteUserSession(refreshToken);

  res.clearCookie("refreshToken", cookieOptions);
  return res.status(200).json(new ApiResponse(200, "logout Successful"));
});

const logoutDevice = asyncHandler(async (req, res) => {
  await sessionService.removeSession(req.params.sessionId);

  return res.status(200).json(new ApiResponse(200, "Device logged out"));
});

const logoutOtherDevices = asyncHandler(async (req, res) => {
  await sessionService.removeOtherSessions(req.user.id, req.session.id);

  return res.status(200).json(new ApiResponse(200, "Other devices logged out"));
});

const forgotPassword = asyncHandler(async (req, res) => {
  const data = forgotPasswordSchema.parse(req.body);

  await passwordResetService.sendPasswordResetEmail(
    data.email
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "If an account exists with this email, a password reset link has been sent."
    )
  );
});

const resetPassword = asyncHandler(async (req, res) => {
  const data = resetPasswordSchema.parse(req.body);

  await passwordResetService.resetPassword(data);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Password reset successful. Please login again."
    )
  );
});

module.exports = {
  register,
  login,
  me,
  refreshToken,
  getSessions,
  verifyEmail,
  logoutDevice,
  logoutOtherDevices,
  logout,
  forgotPassword,
  resetPassword,
};
