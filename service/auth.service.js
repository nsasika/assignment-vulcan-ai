const bcrypt = require("bcrypt-nodejs");
const { errorResponse } = require("../consts/response");
const UsersSerive = require("../service/users.service");
const { bcryptLogin, bcryptHash } = require("../helpers/bcrypt");

const register = async (req, res, next) => {
  try {
    const { username, email, password, address } = req.body;
    let user = await UsersSerive.getUser({ email: email });

    if (user) return res.status(409).json({ message: "email already exists" });

    bcrypt.hash(password, null, null, (err, hash) =>
      bcryptHash(
        err,
        hash,
        res,
        { username, email, address },
        UsersSerive.createUser
      )
    );
  } catch (error) {
    console.log(`AuthService register error , ${error}`);
    return errorResponse(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (username && password) {
      let user = await UsersSerive.getUser({ username });

      if (!user)
        return res.status(404).json({
          message: "No user found, you may need to register first!",
        });

      bcrypt.compare(password, user.password, (err, result) =>
        bcryptLogin(err, result, user, res)
      );
    }
  } catch (error) {
    console.log(`AuthService login error , ${error}`);
    return errorResponse(error);
  }
};

module.exports = { login, register };
