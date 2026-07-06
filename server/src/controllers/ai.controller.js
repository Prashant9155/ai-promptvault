const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");

const { improvePromptSchema, generateTitleSchema, chatSchema } = require("../validators/ai.validator");
const aiService = require("../services/ai.service");

const improvePrompt = asyncHandler(async (req, res) => {
  const { prompt } = improvePromptSchema.parse(req.body);

  const improvedPrompt = await aiService.improvePrompt(prompt);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Prompt improved successfully",
      {
        improvedPrompt,
      }
    )
  );
});


const generateTitle = asyncHandler(async (req, res) => {
  const { content } = generateTitleSchema.parse(req.body);

  const title = await aiService.generateTitle(content);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Title generated successfully",
      {
        title,
      }
    )
  );
});

const summarizePrompt = asyncHandler(async (req, res) => {
  const { content } = summarizeSchema.parse(req.body);

  const summary = await aiService.summarizePrompt(content);

  return res.status(200).json(
    new ApiResponse(200, "Summary generated", {
      summary,
    })
  );
});

const explainPrompt = asyncHandler(async (req, res) => {
  const { content } = explainSchema.parse(req.body);

  const explanation = await aiService.explainPrompt(content);

  return res.status(200).json(
    new ApiResponse(200, "Explanation generated", {
      explanation,
    })
  );
});

const optimizePrompt = asyncHandler(async (req, res) => {
  const { content } = optimizeSchema.parse(req.body);

  const optimizedPrompt =
    await aiService.optimizePrompt(content);

  return res.status(200).json(
    new ApiResponse(200, "Prompt optimized", {
      optimizedPrompt,
    })
  );
});

const chat = asyncHandler(async (req, res) => {
  const data = chatSchema.parse(req.body);

  const response = await aiService.chat(data);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Response generated successfully",
      {
        response,
      }
    )
  );
});

module.exports = {
  improvePrompt,
  generateTitle,
  summarizePrompt,
  explainPrompt,
  optimizePrompt,
  chat,

};