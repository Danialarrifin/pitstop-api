const { Sequelize } = require("sequelize");
const config = require("./database.config");

const sequelize = new Sequelize(
  config.database_url,
  {
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      }
    },
  }
);

module.exports = sequelize;