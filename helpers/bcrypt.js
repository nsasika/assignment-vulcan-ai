const jwt = require("jsonwebtoken");
const { jwtOptions } = require("../config/jwtOptions");

const bcryptHash = async (err, hash, res, userInfo, createUser) => {
  const { username, email, address } = userInfo;
  if (err) res.status(409).json({ message: "can not create user" });

  const { data: user, error } = await createUser({
    username,
    email,
    password: hash,
    address,
  });

  if (error)
    res.status(500).json({ message: "account creation usuccessfull", error });

  if (user)
    res.status(200).json({ user, message: "account created successfully" });
};

const bcryptLogin = (err, result, user, res) => {
  if (err) res.status(403).json({ message: "incorrect password" });

  if (result) {
    let payload = { user };
    console.log(jwtOptions.secretOrKey);
    let token = jwt.sign(payload, jwtOptions.secretOrKey);
    return res.status(200).json({ message: "ok", token });
  } else return res.status(403).json({ message: "incorrect password" });
};

module.exports = { bcryptLogin, bcryptHash };
