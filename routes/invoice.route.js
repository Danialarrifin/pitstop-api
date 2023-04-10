const express = require('express');
const router = express.Router();

const { invoiceController } = require('../controllers');
const ErrorHandler = require('../middleware/error.middleware');
const AuthGuard = require('../middleware/auth.middleware');
const validate = require('../utils/validator.util');
const { invoiceValidation } = require('../validations');

router.get('/', AuthGuard, ErrorHandler(invoiceController.getAllInvoice));
router.post('/', AuthGuard, validate(invoiceValidation.createInvoice), ErrorHandler(invoiceController.createInvoice));
router.post('/update', AuthGuard, validate(invoiceValidation.updateInvoice), ErrorHandler(invoiceController.updateInvoice));
router.get('/delete', AuthGuard, ErrorHandler(invoiceController.deleteInvoice));

module.exports = router;