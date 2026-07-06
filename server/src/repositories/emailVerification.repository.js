const prisma = require("../config/prisma");

const createEmailVerificationToken = async (data) => {
  return prisma.emailVerificationToken.create({
    data,
  });
};

const findEmailVerificationToken = async (token) => {
  return prisma.emailVerificationToken.findUnique({
    where: {
      token,
    },
    include: {
      user: true,
    },
  });
};

const deleteEmailVerificationToken = async (token) => {
  return prisma.emailVerificationToken.delete({
    where: {
      token,
    },
  });
};

const deleteUserEmailVerificationTokens = async (userId) => {
  return prisma.emailVerificationToken.deleteMany({
    where: {
      userId,
    },
  });
};

module.exports = {
  createEmailVerificationToken,
  findEmailVerificationToken,
  deleteEmailVerificationToken,
  deleteUserEmailVerificationTokens,
};