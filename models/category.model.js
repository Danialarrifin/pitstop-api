const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Category = sequelize.define('categories', {
    name: {
        type: DataTypes.STRING
    },
    workshop_id: {
        type: DataTypes.INTEGER
    },

}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
});

module.exports = Category;