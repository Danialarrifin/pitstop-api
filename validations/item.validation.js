const Joi = require('joi');

const getItem = Joi.object().keys({
    itemId: Joi.string().required(),
});

const createItem = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.string().required(),
    // workshop_id: Joi.string().required(),
    name: Joi.string().required(),
    contact_num: Joi.string().required(),
    // address_id: Joi.string().required(),
    road_assiatance_enabled: Joi.string().allow(null, ''),
    address: Joi.string().required(),
    state: Joi.string().required(),
    postcode: Joi.string().required(),
    city: Joi.string().required(),
    latitude: Joi.string().allow(null, ''),
    longitude: Joi.string().allow(null, ''),
})

module.exports = {
    getItem,
    createItem
}