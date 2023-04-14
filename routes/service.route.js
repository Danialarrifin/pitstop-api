const express = require('express');
const router = express.Router();

const { serviceController } = require('../controllers');
const ErrorHandler = require('../middleware/error.middleware');
const AuthGuard = require('../middleware/auth.middleware');
const validate = require('../utils/validator.util');
const { serviceValidation } = require('../validations');

router.get('/', AuthGuard, ErrorHandler(serviceController.getAllService));
router.post('/', AuthGuard, validate(serviceValidation.createService), ErrorHandler(serviceController.createService));
router.post('/update', AuthGuard, validate(serviceValidation.updateService), ErrorHandler(serviceController.updateService));
router.get('/delete', AuthGuard, ErrorHandler(serviceController.deleteService));

module.exports = router;