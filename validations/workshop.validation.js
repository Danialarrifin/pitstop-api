const Joi = require('joi');

const getWorkshop = Joi.object().keys({
    workshopId: Joi.string().required(),
});

const createWorkshop = Joi.object().keys({
    name: Joi.string().required(),
    contact_no: Joi.string().required(),
    // address_id: Joi.string().required(),
    road_assiatance_enaled: Joi.string().allow(null, ''),
    address: Joi.string().required(),
    state: Joi.string().required(),
    postcode: Joi.string().required(),
    city: Joi.string().required(),
    latitude: Joi.string().allow(null, ''),
    longitude: Joi.string().allow(null, ''),
})

module.exports = {
    getWorkshop,
    createWorkshop
}