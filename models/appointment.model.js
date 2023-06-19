const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Appointment = sequelize.define('appointments', {
    date: {
        type: DataTypes.DATE
    },
    time_slot_id: {
        type: DataTypes.INTEGER
    },
    vehicle_id: {
        type: DataTypes.INTEGER
    },
    service_id: {
        type: DataTypes.INTEGER
    },
    user_id: {
        type: DataTypes.INTEGER
    },
     workshop_id: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING
    },
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
});

module.exports = Appointment;