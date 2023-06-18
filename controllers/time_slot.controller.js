const sequelize = require('../config/connection');
const { Time_slot } = require('../models');

const getAllTime_slot = async (req, res) => {
    let time_slots;
        if (req.query.time_slotId)
        time_slots = await Time_slot.findByPk(req.query.time_slotId)
    else if (req.query.workshopId) {
        time_slots = await sequelize.query(`SELECT * FROM time_slots WHERE workshop_id = ${req.query.workshopId}`);
    }
    else
        time_slots = await sequelize.query(`SELECT * FROM time_slots`);

    if (time_slots)
        return res.json(time_slots);
    else
        return res.status(400).json({ message: 'time_slots not found' })
}

const getTime_slot = async (req, res) => {
    const time_slot = await Time_slot.findByPk(req.query.time_slotId)
    return res.json(time_slot);
}
const createTime_slot = async (req, res) => {
    const { count, rows } = await Time_slot.findAndCountAll({
        where: {
            start_time: req.body.start_time,
            end_time: req.body.end_time,
        }
    });
    console.log("count", count)

    if(count > 0){
        // duplicate found, return error
        return res.status(400).json({ message: 'time slot already exists' })
    } else {

        // 3. create time_slot
        const time_slot = await Time_slot.create({
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            slot_limit: req.body.slot_limit,
            workshop_id: req.body.workshop_id,
        });
        return res.json(time_slot);
    }
};

const updateTime_slot = async (req, res) => {
    const time_slot = await Time_slot.update({
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        slot_limit: req.body.slot_limit,
        workshop_id: req.body.workshop_id,
    }, {
        where: {
            id: req.query.time_slotId
        }
    });
    return res.json({ message: 'time_slot successfully updated' });
};

const deleteTime_slot = async (req, res) => {
    const time_slot = await Time_slot.destroy({
        where: {
            id: req.query.time_slotId
        }
    });
    return res.json({ message: 'time_slot successfully deleted' });
};
module.exports = {
    getAllTime_slot,
    getTime_slot,
    createTime_slot,
    updateTime_slot,
    deleteTime_slot
}