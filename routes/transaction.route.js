const express = require('express');
const router = express.Router();

const { transactionController } = require('../controllers');
const ErrorHandler = require('../middleware/error.middleware');
const AuthGuard = require('../middleware/auth.middleware');
const validate = require('../utils/validator.util');
const { transactionValidation } = require('../validations');

router.get('/', AuthGuard, ErrorHandler(transactionController.getAllTransaction));
router.post('/', AuthGuard, validate(transactionValidation.createTransaction), ErrorHandler(transactionController.createTransaction));
router.post('/update', AuthGuard, validate(transactionValidation.updateTransaction), ErrorHandler(transactionController.updateTransaction));
router.get('/delete', AuthGuard, ErrorHandler(transactionController.deleteTransaction));

module.exports = router;