const ApiError = require("../utils/apiError");
const {
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
  findPromptVersionById,
  restorePromptVersion,

} = require("../repositories/prompt.repository");
const collectionService = require("./collection.service");

const { getPagination, getPaginationMeta } = require("../utils/pagination");

// Helper Function 
const getOwnedPrompt = async (promptId, userId) => {
  const prompt = await findPromptById(promptId);

  if (!prompt) {
    throw new ApiError(404, "Prompt not found");
  }

  if (prompt.ownerId !== userId) {
    throw new ApiError(403, "Access denied");
  }

  return prompt;
};

const create = async (promptData, userId) => {
  return createPrompt({
    ...promptData,
    ownerId: userId,
  });
};

const getAll = async (userId, query) => {
  const {
    page,
    limit,
    search,
    visibility,
    isFavorite,
    isArchived,
    sortBy,
    order,
  } = query;

  const where = {};

  if (search) {
    where.OR = [
      {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        description: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        content: {
          contains: search,
          mode: "insensitive",
        },
      },
    ];
  }

  if (visibility) {
    where.visibility = visibility;
  }

  if (typeof isFavorite === "boolean") {
    where.isFavorite = isFavorite;
  }

  if (typeof isArchived === "boolean") {
    where.isArchived = isArchived;
  }

  const pagination = getPagination(page, limit);

  const orderBy = {
    [sortBy]: order,
  };

  const [prompts, total] = await Promise.all([
    findUserPrompts(
      userId,
      where,
      pagination,
      orderBy
    ),
    countUserPrompts(userId, where),
  ]);

  return {
    prompts,
    pagination: getPaginationMeta({
      total,
      page: pagination.page,
      limit: pagination.limit,
    }),
  };
};

const getById = async (promptId, userId) => {
  return getOwnedPrompt(promptId, userId);
};
const update = async (promptId, userId, data) => {
  if (Object.keys(data).length === 0) {
    throw new ApiError(400, "No fields provided for update");
  }

  // Get current prompt
  const prompt = await getOwnedPrompt(promptId, userId);

  return prisma.$transaction(async (tx) => {
    // Save current state as a version
    await createPromptVersion(prompt, tx);

    // Update prompt
    return tx.prompt.update({
      where: {
        id: promptId,
      },
      data,
    });
  });
};

const remove = async (promptId, userId) => {
  await getOwnedPrompt(promptId, userId);

  await deletePrompt(promptId);
};

const favorite = async (promptId, userId) => {
  const prompt = await getOwnedPrompt(promptId, userId);

  return toggleFavorite(
    promptId,
    !prompt.isFavorite
  );
};

const archive = async (promptId, userId) => {
  const prompt = await getOwnedPrompt(promptId, userId);

  return toggleArchive(promptId, !prompt.isArchived);
};

// Move a prompt into a collection
const moveToCollection = async (
  promptId,
  collectionId,
  userId
) => {

  // Check prompt belongs to logged-in user
  await getOwnedPrompt(promptId, userId);

  // If collection is provided,
  // verify it also belongs to the same user
  if (collectionId) {
    await collectionService.getById(
      collectionId,
      userId
    );
  }

  // Update prompt's collectionId
  return movePromptToCollection(
    promptId,
    collectionId
  );
};

const getVersions = async (promptId, userId) => {
  // Verify ownership
  await getOwnedPrompt(promptId, userId);

  return findPromptVersions(promptId);
};

const getVersion = async (
  promptId,
  versionId,
  userId
) => {
  await getOwnedPrompt(promptId, userId);

  const version = await findPromptVersionById(
    promptId,
    versionId
  );

  if (!version) {
    throw new ApiError(404, "Version not found");
  }

  return version;
};

const restoreVersion = async (
  promptId,
  versionId,
  userId
) => {
  const prompt = await getOwnedPrompt(
    promptId,
    userId
  );

  const version = await findPromptVersionById(
    promptId,
    versionId
  );

  if (!version) {
    throw new ApiError(404, "Version not found");
  }

  return prisma.$transaction(async (tx) => {
    // Save current prompt as a new version
    await createPromptVersion(prompt, tx);

    // Restore selected version
    return restorePromptVersion(
      promptId,
      version,
      tx
    );
  });
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  favorite,
  archive,
  moveToCollection,
  getVersions,
  getVersion,
  restoreVersion,

};
