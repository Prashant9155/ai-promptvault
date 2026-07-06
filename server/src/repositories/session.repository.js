const prisma = require("../config/prisma");

const createSession = async (data) =>{
    return prisma.session.create({
        data,
    });
};

const findSessionByRefreshToken = async (refreshToken) =>{
    return prisma.session.findUnique({
        where:{
            refreshToken,
        },
        include: {
            user: true,
        },
    });
};

const deleteSession = async (refreshToken) =>{
    return prisma.session.delete({
        where:{
            refreshToken,
        },
    });
};

const deleteAllSessions = async (userId) =>{
    return prisma.session.deleteMany({
        where:{ userId },
    });
};

const getUserSessions = async (userId) => {
  return prisma.session.findMany({
    where: {
      userId,
    },
    orderBy: {
      lastActiveAt: "desc",
    },
  });
};

const deleteSessionById = async (sessionId) => {
  return prisma.session.delete({
    where: {
      id: sessionId,
    },
  });
};

const deleteOtherSessions = async (userId, sessionId) => {
  return prisma.session.deleteMany({
    where: {
      userId,
      NOT: {
        id: sessionId,
      },
    },
  });
};

const deleteSessionsByUserId = async (userId) => {
  return prisma.session.deleteMany({
    where: {
      userId,
    },
  });
};

const findSessionById = async (sessionId) => {
  return prisma.session.findUnique({
    where: {
      id: sessionId,
    },
    include: {
      user: true,
    },
  });
};


module.exports = {
    createSession, 
    findSessionByRefreshToken,
    findSessionById,
    deleteSession,
    deleteAllSessions,
    deleteSessionsByUserId,
    getUserSessions,
    deleteSessionById,
    deleteOtherSessions,
}