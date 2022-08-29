const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt-nodejs");
const AuthCtrl = require("../controller/auth.controller");

const createUser = async ({ firstName, lastName, email, password }) =>
  await User.create({ firstName, lastName, email, password });

const getUser = async (obj) =>
  await User.findOne({
    where: obj,
  });

router.post("/login", AuthCtrl.login);

router.post("/register", async function (req, res, next) {
  const user = await getUser({ email: req.body.email });
  if (user) return res.status(409).json({ message: "email already exists" });

  bcrypt.hash(req.body.password, null, null, (err, hash) => {
    createUser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
    }).then((user) =>
      res.status(200).json({ user, msg: "account created successfully" })
    );
  });
});

module.exports = router;
