const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Vehicle = sequelize.define('vehicles', {
    plate_num: {
        type: DataTypes.STRING
    },
    model: {
        type: DataTypes.STRING
    },
    manufacturer: {
        type: DataTypes.STRING
    },
    image_path: {
        type: DataTypes.STRING
    },
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
});

module.exports = Vehicle;
