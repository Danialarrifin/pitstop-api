const Joi = require('joi');

const getTime_slot = Joi.object().keys({
   time_slotId: Joi.string().required(),
});

const createTime_slot = Joi.object().keys({
    start_time: Joi.string().required(),
    end_time: Joi.string().required(),
    slot_limit: Joi.number().required(),
    workshop_id: Joi.number().required(),

})

module.exports = {
    getTime_slot,
    createTime_slot
}