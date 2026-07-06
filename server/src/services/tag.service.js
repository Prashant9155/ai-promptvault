const ApiError = require("../utils/apiError");
const promptService = require("./prompt.service");

const {
  createTag,
  findAllTags,
  attachTagToPrompt,
  findTagById,
  removeTagFromPrompt,
} = require("../repositories/tag.repository");

const create = async (data) => {
  return createTag(data);
};

const getAll = async () => {
  return findAllTags();
};

const addTagToPrompt = async (
  promptId,
  tagId,
  userId
) => {
  await promptService.getById(promptId, userId);

  const tag = await findTagById(tagId);

  if (!tag) {
    throw new ApiError(404, "Tag not found");
  }

  return attachTagToPrompt(promptId, tagId);
};

const removeTag = async (
  promptId,
  tagId,
  userId
) => {
  await promptService.getById(promptId, userId);

  await findTagById(tagId);

  return removeTagFromPrompt(promptId, tagId);
};

const getTagsOfPrompt = async (
  promptId,
  userId
) => {
  await promptService.getById(promptId, userId);

  const prompt = await getPromptTags(promptId);

  return prompt.tags.map((item) => item.tag);
};

const getTaggedPrompts = async (
  tagId,
  userId
) => {
  await findTagById(tagId);

  return getPromptsByTag(tagId, userId);
};

module.exports = {
  create,
  getAll,
  addTagToPrompt,
  removeTag,
  getTagsOfPrompt,
  getTaggedPrompts,
  


};