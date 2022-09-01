const Sequelize = require("sequelize");
const db = require("../config/database");
const Advertisement = require("./advertisements");

const User = db.define("user", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.hasMany(Advertisement, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});
Advertisement.belongsTo(User, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

module.exports = User;
