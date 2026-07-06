const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");

const {
  createPromptSchema,
  getPromptsSchema,
  getPromptSchema,
  updatePromptSchema,
  movePromptSchema,
} = require("../validators/prompt.validator");

const promptService = require("../services/prompt.service");

const createPrompt = asyncHandler(async (req, res) => {
  const data = createPromptSchema.parse(req.body);

  const prompt = await promptService.create(data, req.user.id);

  return res
    .status(201)
    .json(new ApiResponse(201, "Prompt created successfully", prompt));
});

const getPrompts = asyncHandler(async (req, res) => {
  const query = getPromptsSchema.parse(req.query);

  const result = await promptService.getAll(req.user.id, query);

  return res
    .status(200)
    .json(new ApiResponse(200, "Prompts fetched successfully", result));
});

const getPrompt = asyncHandler(async (req, res) => {
  const { id } = getPromptSchema.parse(req.params);

  const prompt = await promptService.getById(id, req.user.id);

  return res
    .status(200)
    .json(new ApiResponse(200, "Prompt fetched successfully", prompt));
});

const updatePrompt = asyncHandler(async (req, res) => {
  const { id } = getPromptSchema.parse(req.params);

  const data = updatePromptSchema.parse(req.body);

  const prompt = await promptService.update(id, req.user.id, data);

  return res
    .status(200)
    .json(new ApiResponse(200, "Prompt updated successfully", prompt));
});

const deletePrompt = asyncHandler(async (req, res) => {
  const { id } = getPromptSchema.parse(req.params);

  await promptService.remove(id, req.user.id);

  return res
    .status(200)
    .json(new ApiResponse(200, "Prompt deleted successfully"));
});

const favoritePrompt = asyncHandler(async (req, res) => {
  const { id } = getPromptSchema.parse(req.params);

  const prompt = await promptService.favorite(id, req.user.id);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        prompt.isFavorite
          ? "Prompt added to favorites"
          : "Prompt removed from favorites",
        prompt,
      ),
    );
});

const archivePrompt = asyncHandler(async (req, res) => {
  const { id } = getPromptSchema.parse(req.params);

  const prompt = await promptService.archive(id, req.user.id);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        prompt.isArchived
          ? "Prompt archived successfully"
          : "Prompt restored successfully",
        prompt,
      ),
    );
});

// Move prompt to a collection
const movePrompt = asyncHandler(async (req, res) => {
  // Validate URL parameter
  const { id } = getPromptSchema.parse(req.params);

  // Validate body
  const { collectionId } = movePromptSchema.parse(req.body);

  const prompt = await promptService.moveToCollection(
    id,
    collectionId,
    req.user.id,
  );

  return res
    .status(200)
    .json(new ApiResponse(200, "Prompt moved successfully", prompt));
});

const getPromptVersions = asyncHandler(async (req, res) => {
  const { id } = getPromptSchema.parse(req.params);

  const versions = await promptService.getVersions(id, req.user.id);

  return res
    .status(200)
    .json(
      new ApiResponse(200, "Prompt versions fetched successfully", versions),
    );
});

const getPromptVersion = asyncHandler(async (req, res) => {
  const { id, versionId } = req.params;

  const version = await promptService.getVersion(id, versionId, req.user.id);

  return res
    .status(200)
    .json(new ApiResponse(200, "Prompt version fetched successfully", version));
});

const restorePromptVersion = asyncHandler(async (req, res) => {
  const { id, versionId } = req.params;

  const prompt = await promptService.restoreVersion(id, versionId, req.user.id);

  return res
    .status(200)
    .json(new ApiResponse(200, "Prompt restored successfully", prompt));
});

module.exports = {
  createPrompt,
  getPrompts,
  getPrompt,
  updatePrompt,
  deletePrompt,
  favoritePrompt,
  archivePrompt,
  movePrompt,
  getPromptVersions,
  getPromptVersion,
  restorePromptVersion,
};
