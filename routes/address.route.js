const express = require('express');
const router = express.Router();

const { addressController } = require('../controllers');
const ErrorHandler = require('../middleware/error.middleware');
const AuthGuard = require('../middleware/auth.middleware');
const validate = require('../utils/validator.util');
const { addressValidation } = require('../validations');

router.get('/', AuthGuard, ErrorHandler(addressController.getAllAddress));
router.post('/', AuthGuard, validate(addressValidation.createAddress), ErrorHandler(addressController.createAddress));
router.post('/update', AuthGuard, validate(addressValidation.updateAddress), ErrorHandler(addressController.updateAddress));
router.get('/delete', AuthGuard, ErrorHandler(addressController.deleteAddress));

module.exports = router;