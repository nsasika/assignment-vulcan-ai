const Sequelize = require("sequelize");
const db = require("../config/database");

const Content = db.define("content", {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Content;
