const express = require('express');
const router = express.Router();

const { vehicleController } = require('../controllers');
const ErrorHandler = require('../middleware/error.middleware');
const AuthGuard = require('../middleware/auth.middleware');
const validate = require('../utils/validator.util');
const { vehicleValidation } = require('../validations');

router.get('/', AuthGuard, ErrorHandler(vehicleController.getAllVehicle));
router.post('/', AuthGuard, validate(vehicleValidation.createVehicle), ErrorHandler(vehicleController.createVehicle));
router.post('/update', AuthGuard, validate(vehicleValidation.updateVehicle), ErrorHandler(vehicleController.updateVehicle));
router.get('/delete', AuthGuard, ErrorHandler(vehicleController.deleteVehicle));

module.exports = router;