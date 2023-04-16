const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Time_slot = sequelize.define('time_slots', {
    start_time: {
        type: DataTypes.STRING
    },
    end_time: {
        type: DataTypes.STRING
    },
    slot_limit: {
        type: DataTypes.INTEGER
    },
    workshop_id: {
        type: DataTypes.INTEGER
    },

}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
});

module.exports = Time_slot;