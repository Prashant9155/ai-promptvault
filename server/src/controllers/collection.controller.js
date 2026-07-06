const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");

const {
  createCollectionSchema,
  updateCollectionSchema,
} = require("../validators/collection.validator");

const collectionService = require("../services/collection.service");

const createCollection = asyncHandler(async (req, res) => {
  const data = createCollectionSchema.parse(req.body);

  const collection = await collectionService.create(
    data,
    req.user.id
  );

  return res.status(201).json(
    new ApiResponse(
      201,
      "Collection created successfully",
      collection
    )
  );
});

const getCollections = asyncHandler(async (req, res) => {
  const collections = await collectionService.getAll(req.user.id);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Collections fetched successfully",
      collections
    )
  );
});

const updateCollection = asyncHandler(async (req, res) => {
  const { id } = getPromptSchema.parse(req.params);

  const data = updateCollectionSchema.parse(req.body);

  const collection = await collectionService.update(
    id,
    req.user.id,
    data
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Collection updated successfully",
      collection
    )
  );
});

const deleteCollection = asyncHandler(async (req, res) => {
  const { id } = getPromptSchema.parse(req.params);

  await collectionService.remove(id, req.user.id);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Collection deleted successfully"
    )
  );
});

const movePrompt = asyncHandler(async (req, res) => {
  const { id } = getPromptSchema.parse(req.params);

  const { collectionId } = movePromptSchema.parse(req.body);

  const prompt = await promptService.moveToCollection(
    id,
    collectionId,
    req.user.id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Prompt moved successfully",
      prompt
    )
  );
});

module.exports = {
  createCollection,
  getCollections,
  updateCollection,
  deleteCollection,
  movePrompt,

};