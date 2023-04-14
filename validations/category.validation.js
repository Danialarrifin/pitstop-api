const Joi = require('joi');

const getCategory = Joi.object().keys({
    categoryId: Joi.string().required(),
});

const createCategory = Joi.object().keys({
    name: Joi.string().required(),
    workshop_id: Joi.number().required(),
})

module.exports = {
    getCategory,
    createCategory
}