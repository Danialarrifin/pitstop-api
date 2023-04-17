const Joi = require('joi');

const getService = Joi.object().keys({
    serviceId: Joi.string().required(),
});

const createService = Joi.object().keys({
    name: Joi.string().required(),
    image_path: Joi.string().allow(null, ''),
    price: Joi.string().required(),
    description: Joi.string().required(),
    category_id: Joi.number().required(),
    road_assistance_enabled: Joi.bool().allow(null, ''),

})

module.exports = {
    getService,
    createService
}