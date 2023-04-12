const Joi = require('joi');

const getCategory = Joi.object().keys({
    categoryId: Joi.string().required(),
});

const createCategory = Joi.object().keys({
    name: Joi.string().required(),
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
    getCategory,
    createCategory
}