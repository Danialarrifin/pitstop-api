const express = require('express');
const router = express.Router();

const { reviewController } = require('../controllers');
const ErrorHandler = require('../middleware/error.middleware');
const AuthGuard = require('../middleware/auth.middleware');
const validate = require('../utils/validator.util');
const { reviewValidation } = require('../validations');

router.get('/', AuthGuard, ErrorHandler(reviewController.getAllReview));
router.post('/', AuthGuard, validate(reviewValidation.createReview), ErrorHandler(reviewController.createReview));
router.post('/update', AuthGuard, validate(reviewValidation.updateReview), ErrorHandler(reviewController.updateReview));
router.get('/delete', AuthGuard, ErrorHandler(reviewController.deleteReview));

module.exports = router;