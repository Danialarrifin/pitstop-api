const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Service = sequelize.define('services', {
    name: {
        type: DataTypes.STRING
    },
    image_path: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    category_id: {
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

module.exports = Service;