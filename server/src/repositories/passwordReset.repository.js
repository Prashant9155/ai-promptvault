const prisma = require("../config/prisma");

const createPasswordResetToken = async (data) => {
  return prisma.passwordResetToken.create({
    data,
  });
};

const findPasswordResetToken = async (token) => {
  return prisma.passwordResetToken.findUnique({
    where: {
      token,
    },
    include: {
      user: true,
    },
  });
};

const deletePasswordResetToken = async (token) => {
  return prisma.passwordResetToken.delete({
    where: {
      token,
    },
  });
};

const deleteUserPasswordResetTokens = async (userId) => {
  return prisma.passwordResetToken.deleteMany({
    where: {
      userId,
    },
  });
};

module.exports = {
  createPasswordResetToken,
  findPasswordResetToken,
  deletePasswordResetToken,
  deleteUserPasswordResetTokens,
};