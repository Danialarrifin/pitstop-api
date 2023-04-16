const Joi = require('joi');

const getTransaction = Joi.object().keys({
   transactionId: Joi.string().required(),
});

const createTransaction = Joi.object().keys({
    appointment_id: Joi.number().required(),
    estimated_price: Joi.string().required(),
    remarks: Joi.string().required(),
    is_paid: Joi.string().required(),
    status: Joi.string().required(),
    final_price: Joi.string().required(),

})

module.exports = {
    getTransaction,
    createTransaction
}