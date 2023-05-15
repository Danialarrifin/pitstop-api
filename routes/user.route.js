const express = require('express');
const router = express.Router();

const { userController } = require('../controllers');
const ErrorHandler = require('../middleware/error.middleware');
const AuthGuard = require('../middleware/auth.middleware');
const validate = require('../utils/validator.util');
const { userValidation } = require('../validations');

router.get('/', AuthGuard, ErrorHandler(userController.getAllUser));
router.post('/update', AuthGuard, validate(userValidation.updateUser), ErrorHandler(userController.updateuser));
router.get('/delete', AuthGuard, ErrorHandler(userController.deleteUser));
module.exports = router;