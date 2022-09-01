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

Advertisement.hasMany(Content, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});
Content.belongsTo(Advertisement, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

module.exports = Advertisement;
