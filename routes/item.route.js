const express = require('express');
const router = express.Router();

const { itemController } = require('../controllers');
const ErrorHandler = require('../middleware/error.middleware');
const AuthGuard = require('../middleware/auth.middleware');
const validate = require('../utils/validator.util');
const { itemValidation } = require('../validations');

router.get('/', AuthGuard, ErrorHandler(itemController.getAllItem));
router.post('/', AuthGuard, validate(itemValidation.createItem), ErrorHandler(itemController.createItem));
router.post('/update', AuthGuard, validate(itemValidation.updateItem), ErrorHandler(itemController.updateItem));
router.get('/delete', AuthGuard, ErrorHandler(itemController.deleteItem));

module.exports = router;