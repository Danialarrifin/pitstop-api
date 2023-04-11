const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Workshop = sequelize.define('workshops', {
    name: {
        type: DataTypes.STRING
    },
    contact_num: {
        type: DataTypes.STRING
    },
    address_id: {
        type: DataTypes.INTEGER
    },
    road_assistance_enabled: {
        type: DataTypes.BOOLEAN
    },
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
});

module.exports = Workshop;