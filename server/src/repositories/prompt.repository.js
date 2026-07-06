const prisma = require("../config/prisma");

const createPrompt = async (data) => {
  return prisma.prompt.create({
    data,
  });
};

const findUserPrompts = async (
  userId,
  where,
  pagination,
  orderBy
) => {
  return prisma.prompt.findMany({
    where: {
      ownerId: userId,
      ...where,
    },

    skip: pagination.skip,

    take: pagination.take,

    orderBy,
  });
};

const countUserPrompts = async (
  userId,
  where
) => {
  return prisma.prompt.count({
    where: {
      ownerId: userId,
      ...where,
    },
  });
};

const findPromptById = async (id) => {
  return prisma.prompt.findUnique({
    where: {
      id,
    },
  });
};

const updatePrompt = async (id, data) => {
  return prisma.prompt.update({
    where: {
      id,
    },
    data,
  });
};

const deletePrompt = async (id) => {
  return prisma.prompt.delete({
    where: {
      id,
    },
  });
};

const toggleFavorite = async (id, isFavorite) => {
  return prisma.prompt.update({
    where: {
      id,
    },
    data: {
      isFavorite,
    },
  });
};

const toggleArchive = async (id, isArchived) => {
  return prisma.prompt.update({
    where: { id },
    data: {
      isArchived,
    },
  });
};

const movePromptToCollection = async (promptId, collectionId) => {
  return prisma.prompt.update({
    where: {
      id: promptId,
    },
    data: {
      collectionId,
    },
  });
};

const createPromptVersion = async (prompt, tx = prisma) => {
  const latestVersion = await tx.promptVersion.findFirst({
    where: {
      promptId: prompt.id,
    },
    orderBy: {
      versionNumber: "desc",
    },
  });

  return tx.promptVersion.create({
    data: {
      promptId: prompt.id,
      versionNumber: latestVersion
        ? latestVersion.versionNumber + 1
        : 1,

      title: prompt.title,
      description: prompt.description,
      content: prompt.content,
      aiModel: prompt.aiModel,
      visibility: prompt.visibility,
    },
  });
};

const findPromptVersions = async (promptId) => {
  return prisma.promptVersion.findMany({
    where: {
      promptId,
    },
    orderBy: {
      versionNumber: "desc",
    },
  });
};
const findPromptVersionById = async (
  promptId,
  versionId
) => {
  return prisma.promptVersion.findFirst({
    where: {
      id: versionId,
      promptId,
    },
  });
};

const restorePromptVersion = async (
  promptId,
  version,
  tx = prisma
) => {
  return tx.prompt.update({
    where: {
      id: promptId,
    },
    data: {
      title: version.title,
      description: version.description,
      content: version.content,
      aiModel: version.aiModel,
      visibility: version.visibility,
    },
  });
};

module.exports = {
  createPrompt,
  findUserPrompts,
  countUserPrompts,
  findPromptById,
  updatePrompt,
  deletePrompt,
  toggleFavorite,
  toggleArchive,
  movePromptToCollection,
  createPromptVersion,
  findPromptVersions,
  findPromptVersionById,
  restorePromptVersion,



};