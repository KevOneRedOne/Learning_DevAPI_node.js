const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");
const verifyAdmin = require("../middlewares/verifyAdmin");

// router.get("/:id", verifyToken, userController.getUser);
router.get("/user", verifyToken, userController.getUser);
router.get("/users", [verifyToken, verifyAdmin], userController.getAllUsers);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.put("/whishlist", verifyToken, userController.updateUserWishlist);

module.exports = router;