const express = require("express");

const authenticate = require("../middlewares/auth.middleware");
const collectionController = require("../controllers/collection.controller");


const router = express.Router();

router.post("/", authenticate, collectionController.createCollection);
router.get("/", authenticate, collectionController.getCollections);
router.patch("/:id", authenticate, collectionController.updateCollection);
router.delete("/:id", authenticate, collectionController.deleteCollection);


module.exports = router;