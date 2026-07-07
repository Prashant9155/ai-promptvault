const bcrypt = require("bcrypt");
const ApiError = require("../utils/apiError");

const {
  findUserByEmail,
  createUser,
  getUserProfile,
} = require("../repositories/user.repository");
const sessionService = require("./session.service");
const emailVerificationService = require("./emailVerification.service");

const register = async (userData) => {
  const existingUser = await findUserByEmail(userData.email);

  if (existingUser) {
    throw new ApiError(409, "Email already exists");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const user = await createUser({
    ...userData,
    password: hashedPassword,
  });

  await emailVerificationService.sendVerificationEmail(user);

  return user;
};

const login = async ({ email, password }, deviceInfo) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  if (!user.isEmailVerified) {
    throw new ApiError(403, "Please verify your email before logging in.");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid email or password");
  }

  const tokens = await sessionService.createUserSession(user, deviceInfo);

  return {
    user,
    ...tokens,
  };
};

const me = async (userId) => {
  return getUserProfile(userId);
};

module.exports = {
  register,
  login,
  me,
};
