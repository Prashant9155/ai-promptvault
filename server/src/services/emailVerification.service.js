const {
  generateRawToken,
  hashToken,
  generateTokenExpiry,
  isTokenExpired,
} = require("./token.service");

const {
  createEmailVerificationToken,
  deleteUserEmailVerificationTokens,
  findEmailVerificationToken,
  deleteEmailVerificationToken,
} = require("../repositories/emailVerification.repository");
const { verifyUserEmail } = require("../repositories/user.repository");


const ApiError = require("../utils/apiError");

const emailService = require("./email.service");

const sendVerificationEmail = async (user) => {
  const rawToken = generateRawToken();

  const hashedToken = hashToken(rawToken);

  await deleteUserEmailVerificationTokens(user.id);

  await createEmailVerificationToken({
    token: hashedToken,
    userId: user.id,
    expiresAt: generateTokenExpiry(30),
  });

  await emailService.sendVerificationEmail(user.email, rawToken);
};

const verifyEmail = async (token) => {
  const hashedToken = hashToken(token);

  const verificationToken =
    await findEmailVerificationToken(hashedToken);

  if (!verificationToken) {
    throw new ApiError(400, "Invalid verification token");
  }

  if (isTokenExpired(verificationToken.expiresAt)) {
    throw new ApiError(400, "Verification token expired");
  }

  await verifyUserEmail(verificationToken.user.id);

  await deleteEmailVerificationToken(hashedToken);
};

module.exports = {
  sendVerificationEmail,
  verifyEmail,
};
