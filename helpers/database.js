const db = require("../config/database");
const Users = require("../models/users");
const Advertisements = require("../models/advertisements");
const Contents = require("../models/contents");

const excuteDb = () => {
  db.authenticate()
    .then(() => console.log("Database connected..."))
    .catch((err) => console.log(`Error: ${err}`));

  Users.sync({ alter: true })
    .then(() => console.log("User table created successfully"))
    .catch((err) => console.log(`Users table not created,  error ${err}`));

  Advertisements.sync({ alter: true })
    .then(() => console.log("Advertisements table created successfully"))
    .catch((err) =>
      console.log(`Advertisements table not created,  error ${err}`)
    );

  Contents.sync({ alter: true })
    .then(() => console.log("Contents table created successfully"))
    .catch((err) => console.log(`Contents table not created,  error ${err}`));
};

module.exports = { excuteDb };
