const Joi = require('joi');

const getVehicle = Joi.object().keys({
    vehicleId: Joi.string().required(),
});

const createVehicle = Joi.object().keys({
    plate_num: Joi.string().required(),
    model: Joi.string().required(),
    manufacturer: Joi.string().required(),
    user_id: Joi.number().required(),
    image_path: Joi.string().allow(null, ''),
})

module.exports = {
    getVehicle,
    createVehicle
}