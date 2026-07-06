const prisma = require("../config/prisma");

const findUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: { email },
  });
};


const createUser = async (data) => {
  return prisma.user.create({
    data,
  });
};

const findUserById = async (id) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

const getUserProfile = async (id) => {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      role: true,
      isEmailVerified: true,
      createdAt: true,
    },
  });
};

const verifyUserEmail = async (userId) => {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      isEmailVerified: true,
    },
  });
};

const updatePassword = async (userId, password) => {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password,
    },
  });
};



module.exports = {
  findUserByEmail,
  createUser,
  findUserById,
  getUserProfile,
  verifyUserEmail,
  updatePassword,
};
