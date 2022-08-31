const Sequelize = require("sequelize");
const db = require("../config/database");
const Content = require("./contents");

const Advertisement = db.define("advertisement", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Advertisement.hasMany(Content);
Content.belongsTo(Advertisement);

module.exports = Advertisement;
