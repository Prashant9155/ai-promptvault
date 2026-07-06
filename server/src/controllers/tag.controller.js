const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");

const {
  createTagSchema,
  getPromptSchema,
  attachTagSchema,
} = require("../validators/tag.validator");
const tagService = require("../services/tag.service");

const createTag = asyncHandler(async (req, res) => {
  const data = createTagSchema.parse(req.body);

  const tag = await tagService.create(data);

  return res
    .status(201)
    .json(new ApiResponse(201, "Tag created successfully", tag));
});

const getTags = asyncHandler(async (req, res) => {
  const tags = await tagService.getAll();

  return res
    .status(200)
    .json(new ApiResponse(200, "Tags fetched successfully", tags));
});

const attachTag = asyncHandler(async (req, res) => {
  const { id } = getPromptSchema.parse(req.params);

  const { tagId } = attachTagSchema.parse(req.body);

  await tagService.addTagToPrompt(
    id,
    tagId,
    req.user.id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Tag attached successfully"
    )
  );
});

const removeTag = asyncHandler(async (req, res) => {
  const { id, tagId } = req.params;

  await tagService.removeTag(
    id,
    tagId,
    req.user.id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Tag removed successfully"
    )
  );
});

const getPromptTags = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const tags = await tagService.getTagsOfPrompt(
    id,
    req.user.id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Tags fetched successfully",
      tags
    )
  );
});

const getTaggedPrompts = asyncHandler(async (req, res) => {
  const { tagId } = req.params;

  const prompts = await tagService.getTaggedPrompts(
    tagId,
    req.user.id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Prompts fetched successfully",
      prompts
    )
  );
});

module.exports = {
  createTag,
  getTags,
  attachTag,
  removeTag,
  getPromptTags,
  getTaggedPrompts,
  
  


};
