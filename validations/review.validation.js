const Joi = require('joi');

const getReview = Joi.object().keys({
   reviewId: Joi.string().required(),
});

const createReview = Joi.object().keys({
    rating: Joi.string().required(),
    remarks: Joi.string().required(),
    reviewer: Joi.string().required(),
    workshop_id: Joi.number().required(),

})

module.exports = {
    getReview,
    createReview
}