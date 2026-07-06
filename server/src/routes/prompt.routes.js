const express = require("express");

const authenticate = require("../middlewares/auth.middleware");

const promptController = require("../controllers/prompt.controller");

const router = express.Router();

router.post("/", authenticate, promptController.createPrompt);

router.get("/", authenticate, promptController.getPrompts);

router.get("/:id", authenticate, promptController.getPrompt);

router.patch("/:id", authenticate, promptController.updatePrompt);

router.delete("/:id", authenticate, promptController.deletePrompt);

router.patch("/:id/favorite", authenticate, promptController.favoritePrompt);

router.patch("/:id/archive", authenticate, promptController.archivePrompt);
router.patch("/:id/collection", authenticate, promptController.movePrompt);

router.get("/:id/versions", authenticate, promptController.getPromptVersions);

router.get(
  "/:id/versions/:versionId",
  authenticate,
  promptController.getPromptVersion,
);

router.post(
  "/:id/versions/:versionId/restore",
  authenticate,
  promptController.restorePromptVersion,
);

module.exports = router;
