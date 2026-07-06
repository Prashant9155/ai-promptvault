const express = require("express");

const authenticate = require("../middlewares/auth.middleware");
const tagController = require("../controllers/tag.controller");

const router = express.Router();

router.post("/", authenticate, tagController.createTag);

router.get("/", authenticate, tagController.getTags);
router.post(
  "/prompts/:id",
  authenticate,
  tagController.attachTag
);

router.delete(
  "/prompts/:id/:tagId",
  authenticate,
  tagController.removeTag
);

router.get(
  "/prompts/:id",
  authenticate,
  tagController.getPromptTags
);

router.get(
  "/:tagId/prompts",
  authenticate,
  tagController.getTaggedPrompts
);

module.exports = router;