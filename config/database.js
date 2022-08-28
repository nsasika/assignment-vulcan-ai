const Sequelize = require('sequelize');

const database = new Sequelize({
    database: 'db',
    username: 'user',
    password: 'password',
    dialect: 'mysql',
});

module.exports = database;
