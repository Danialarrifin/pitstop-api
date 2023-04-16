const express = require('express');
const router = express.Router();

const { time_slotController } = require('../controllers');
const ErrorHandler = require('../middleware/error.middleware');
const AuthGuard = require('../middleware/auth.middleware');
const validate = require('../utils/validator.util');
const { time_slotValidation } = require('../validations');

router.get('/', AuthGuard, ErrorHandler(time_slotController.getAllTime_slot));
router.post('/', AuthGuard, validate(time_slotValidation.createTime_slot), ErrorHandler(time_slotController.createTime_slot));
router.post('/update', AuthGuard, validate(time_slotValidation.updateTime_slot), ErrorHandler(time_slotController.updateTime_slot));
router.get('/delete', AuthGuard, ErrorHandler(time_slotController.deleteTime_slot));

module.exports = router;