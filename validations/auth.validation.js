const Joi = require('joi');

const login = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})

const register = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string(),
    address: Joi.string(),
    state: Joi.string(),
    postcode: Joi.string(),
    city: Joi.string(),
    workshop_name: Joi.string(),
    contact_num: Joi.string(),
})

module.exports = {
    register,
    login
}