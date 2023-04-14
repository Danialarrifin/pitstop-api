const Joi = require('joi');

const getItem = Joi.object().keys({
    itemId: Joi.string().required(),
});

const createItem = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.string().required(),
    workshop_id: Joi.number().required(),
})

module.exports = {
    getItem,
    createItem
}