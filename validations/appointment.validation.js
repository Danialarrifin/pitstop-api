const Joi = require('joi');

const getAppointment = Joi.object().keys({
   appointmentId: Joi.string().required(),
});

const createAppointment = Joi.object().keys({
    date: Joi.string().required(),
    time_slot_id: Joi.number().required(),
    vehicle_id: Joi.number().required(),
    service_id: Joi.number().required(),
    status: Joi.string().required(),


})

module.exports = {
    getAppointment,
    createAppointment
}