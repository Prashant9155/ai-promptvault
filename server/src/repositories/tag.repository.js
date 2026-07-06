const prisma = require("../config/prisma");

const createTag = async (data) => {
  return prisma.tag.create({
    data,
  });
};

const findAllTags = async () => {
  return prisma.tag.findMany({
    orderBy: {
      name: "asc",
    },
  });
};

const attachTagToPrompt = async (promptId, tagId) => {
  return prisma.promptTag.create({
    data: {
      promptId,
      tagId,
    },
  });
};

const findTagById = async (id) => {
  return prisma.tag.findUnique({
    where: { id },
  });
};

const removeTagFromPrompt = async (promptId, tagId) => {
  return prisma.promptTag.delete({
    where: {
      promptId_tagId: {
        promptId,
        tagId,
      },
    },
  });
};

const getPromptTags = async (promptId) => {
  return prisma.prompt.findUnique({
    where: {
      id: promptId,
    },
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });
};

const getPromptsByTag = async (tagId, userId) => {
  return prisma.prompt.findMany({
    where: {
      ownerId: userId,
      tags: {
        some: {
          tagId,
        },
      },
    },
  });
};

module.exports = {
  createTag,
  findAllTags,
  attachTagToPrompt,
  findTagById,
  removeTagFromPrompt,
  getPromptTags,
  getPromptsByTag,


};