const express = require('express');
const router = express.Router();

const { appointmentController } = require('../controllers');
const ErrorHandler = require('../middleware/error.middleware');
const AuthGuard = require('../middleware/auth.middleware');
const validate = require('../utils/validator.util');
const { appointmentValidation } = require('../validations');

router.get('/', AuthGuard, ErrorHandler(appointmentController.getAllAppointment));
router.post('/', AuthGuard, validate(appointmentValidation.createAppointment), ErrorHandler(appointmentController.createAppointment));
router.post('/update', AuthGuard, validate(appointmentValidation.updateAppointment), ErrorHandler(appointmentController.updateAppointment));
router.get('/delete', AuthGuard, ErrorHandler(appointmentController.deleteAppointment));

module.exports = router;