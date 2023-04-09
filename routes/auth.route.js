const express = require('express');
const router = express.Router();

const { authController } = require('../controllers');
const ErrorHandler = require('../middleware/error.middleware');
const AuthGuard = require('../middleware/auth.middleware');
const { authValidation } = require('../validations');
const validate = require('../utils/validator.util');

router.post('/register', validate(authValidation.register), ErrorHandler(authController.register));
router.post('/login', validate(authValidation.login), ErrorHandler(authController.login));
router.get('/getProfile', AuthGuard, ErrorHandler(authController.getUserProfile));
router.get('/logout', AuthGuard, ErrorHandler(authController.logout));

module.exports = router;