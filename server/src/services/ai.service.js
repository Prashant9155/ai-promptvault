const ai = require("../config/gemini");

const improvePrompt = async (prompt) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
You are an expert Prompt Engineer.

Improve the following prompt to make it more professional, detailed and AI-friendly.

Return only the improved prompt.

Prompt:
${prompt}
`,
  });

  return response.text;
};

const generateTitle = async (content) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
You are an expert technical writer.

Generate a short, professional title (maximum 8 words) for the following AI prompt.

Return only the title.

Prompt:
${content}
`,
  });

  return response.text.trim();
};

const summarizePrompt = async (content) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
Summarize the following AI prompt in 2-3 concise sentences.

Return only the summary.

Prompt:
${content}
`,
  });

  return response.text.trim();
};

const explainPrompt = async (content) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
Explain what the following AI prompt does.

Explain in simple English.

Prompt:
${content}
`,
  });

  return response.text.trim();
};

const optimizePrompt = async (content) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
Optimize the following AI prompt.

Improve clarity, structure, context and expected output.

Return only the optimized prompt.

Prompt:
${content}
`,
  });

  return response.text.trim();
};

const chat = async ({ message, prompt }) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
You are PromptVault AI Assistant.

Your job is to help users create, improve, explain and optimize AI prompts.

Current Prompt:
${prompt || "No prompt provided"}

User Question:
${message}

Give a helpful professional response.
`,
  });

  return response.text.trim();
};

module.exports = {
  improvePrompt,
  generateTitle,
  summarizePrompt,
  explainPrompt,
  optimizePrompt,
  chat,
};