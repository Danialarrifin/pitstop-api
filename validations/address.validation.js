const Joi = require('joi');

const getVehicle = Joi.object().keys({
    vehicleId: Joi.string().required(),
});

const createVehicle = Joi.object().keys({
    address: Joi.string().required(),
    state: Joi.string().required(),
    postcode: Joi.string().required(),
    city: Joi.string().required(),
    latitude: Joi.string(),
    longitude: Joi.string(),
});

module.exports = {
    getVehicle,
    createVehicle
}