const express = require('express');
const router = express.Router();

const { workshopController } = require('../controllers');
const ErrorHandler = require('../middleware/error.middleware');
const AuthGuard = require('../middleware/auth.middleware');
const validate = require('../utils/validator.util');
const { workshopValidation } = require('../validations');

router.get('/', AuthGuard, ErrorHandler(workshopController.getAllWorkshop));
router.post('/', AuthGuard, validate(workshopValidation.createWorkshop), ErrorHandler(workshopController.createWorkshop));
router.post('/update', AuthGuard, validate(workshopValidation.updateWorkshop), ErrorHandler(workshopController.updateWorkshop));
router.get('/delete', AuthGuard, ErrorHandler(workshopController.deleteWorkshop));

module.exports = router;