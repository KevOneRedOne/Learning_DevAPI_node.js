const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// Pas besoin de préciser le /auth car le suffix est déjà déclaré dans le fichier index.js
router.post('/login', authController.login);
router.post('/register', authController.register);
// router.post('/:id', authController.register);

module.exports = router;