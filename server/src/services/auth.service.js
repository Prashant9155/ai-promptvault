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
  console.log("1. Checking existing user");
  const existingUser = await findUserByEmail(userData.email);

  if (existingUser) {
    throw new ApiError(409, "Email already exists");
  }

  console.log("2. Hashing password");
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  console.log("3. Creating user");
  const user = await createUser({
    ...userData,
    password: hashedPassword,
  });

  console.log("4. User created");

  console.log("5. Calling email service");
  await emailVerificationService.sendVerificationEmail(user);

  console.log("6. Email service finished");

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
