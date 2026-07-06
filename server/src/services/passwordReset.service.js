const ApiError = require("../utils/apiError");
const bcrypt = require("bcrypt");

const {
  generateRawToken,
  hashToken,
  generateTokenExpiry,
   isTokenExpired,
} = require("./token.service");

const {
  createPasswordResetToken,
  deleteUserPasswordResetTokens,
  findPasswordResetToken,
  deletePasswordResetToken,
} = require("../repositories/passwordReset.repository");

const emailService = require("./email.service");

const { findUserByEmail, updatePassword } = require("../repositories/user.repository");
const { deleteSessionsByUserId } = require("../repositories/session.repository");

const sendPasswordResetEmail = async (email) => {
  const user = await findUserByEmail(email);

  // Prevent email enumeration attacks
  if (!user) {
    return;
  }

  const rawToken = generateRawToken();
  const hashedToken = hashToken(rawToken);

  await deleteUserPasswordResetTokens(user.id);

  await createPasswordResetToken({
    token: hashedToken,
    userId: user.id,
    expiresAt: generateTokenExpiry(15),
  });

  await emailService.sendPasswordResetEmail(user.email, rawToken);
};

const resetPassword = async ({ token, password }) => {
  const hashedToken = hashToken(token);

  const passwordResetToken = await findPasswordResetToken(hashedToken);

  if (!passwordResetToken) {
    throw new ApiError(400, "Invalid reset token");
  }

  if (isTokenExpired(passwordResetToken.expiresAt)) {
    throw new ApiError(400, "Reset token expired");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await updatePassword(
    passwordResetToken.user.id,
    hashedPassword
  );

  await deletePasswordResetToken(hashedToken);

  // Logout from every device
  await deleteSessionsByUserId(passwordResetToken.user.id);
};

module.exports = {
  sendPasswordResetEmail,
  resetPassword,
};
