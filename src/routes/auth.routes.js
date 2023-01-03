const express = require('express');

const router = express.Router();
const authController = require('../controllers/auth.controller');
const {
  checkEmail, checkIdentity, checkPassword, validation,
} = require('../middlewares/validators');

// Pas besoin de préciser le /auth car le suffix est déjà déclaré dans le fichier index.js
router.post('/login', authController.login);
router.post('/register', [checkEmail, checkIdentity, checkPassword, validation], authController.register);

module.exports = router;
