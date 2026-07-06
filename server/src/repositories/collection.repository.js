const prisma = require("../config/prisma");

const createCollection = async (data) => {
  return prisma.collection.create({
    data,
  });
};

const findUserCollections = async (userId) => {
  return prisma.collection.findMany({
    where: {
      ownerId: userId,
    },
    include: {
      _count: {
        select: {
          prompts: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
const updateCollection = async (id, data) => {
  return prisma.collection.update({
    where: { id },
    data,
  });
};
const deleteCollection = async (id) => {
  return prisma.collection.delete({
    where: { id },
  });
};



module.exports = {
  createCollection,
  findUserCollections,
  updateCollection,
  deleteCollection,

};