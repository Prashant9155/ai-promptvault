const { z } = require("zod");

const createCollectionSchema = z.object({
  name: z.string().min(2).max(100),
  description: z.string().optional(),
});
const updateCollectionSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  description: z.string().optional(),
});


module.exports = {
  createCollectionSchema,
  updateCollectionSchema,
};
