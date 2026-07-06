const {
  createCollection,
  findUserCollections,
  updateCollection,
  deleteCollection,
  movePromptToCollection,

} = require("../repositories/collection.repository");

const create = async (data, userId) => {
  return createCollection({
    ...data,
    ownerId: userId,
  });
};

const getAll = async (userId) => {
  return findUserCollections(userId);
};
const update = async (id, userId, data) => {
  await getById(id, userId);

  return updateCollection(id, data);
};

const remove = async (id, userId) => {
  await getById(id, userId);

  await deleteCollection(id);
};
const moveToCollection = async (
  promptId,
  collectionId,
  userId
) => {
  await getOwnedPrompt(promptId, userId);

  if (collectionId) {
    await collectionService.getById(collectionId, userId);
  }

  return movePromptToCollection(
    promptId,
    collectionId
  );
};

module.exports = {
  create,
  getAll,
  update,
  remove,
  movePromptToCollection,
  
};