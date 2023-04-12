const express = require('express');
const router = express.Router();

const { categoryController } = require('../controllers');
const ErrorHandler = require('../middleware/error.middleware');
const AuthGuard = require('../middleware/auth.middleware');
const validate = require('../utils/validator.util');
const { categoryValidation } = require('../validations');

router.get('/', AuthGuard, ErrorHandler(categoryController.getAllCategory));
router.post('/', AuthGuard, validate(categoryValidation.createCategory), ErrorHandler(categoryController.createCategory));
router.post('/update', AuthGuard, validate(categoryValidation.updateCategory), ErrorHandler(categoryController.updateCategory));
router.get('/delete', AuthGuard, ErrorHandler(categoryController.deleteCategory));

module.exports = router;