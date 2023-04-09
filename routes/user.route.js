const express = require('express');
const router = express.Router();

const { userController } = require('../controllers');
const ErrorHandler = require('../middleware/error.middleware');
const AuthGuard = require('../middleware/auth.middleware');
const validate = require('../utils/validator.util');

router.get('/', AuthGuard, ErrorHandler(userController.getAllUser));

module.exports = router;