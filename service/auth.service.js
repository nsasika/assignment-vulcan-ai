const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");
const { jwtOptions } = require("../config/jwtOptions");
const { errorResponse } = require("../consts/response");
const UsersSerive = require("../service/users.service");

class AuthService {
  static async register(req, res, next) {
    try {
      const { username, email, password, address } = req.body;
      let user = await UsersSerive.getUser({ email: email });

      if (user)
        return res.status(409).json({ message: "email already exists" });

      bcrypt.hash(password, null, null, async (err, hash) => {
        if (err) res.status(409).json({ message: "can not create user" });

        const { data: user, error } = await UsersSerive.createUser({
          username,
          email,
          password: hash,
          address,
        });

        if (error)
          res
            .status(500)
            .json({ message: "account creation usuccessfull", error });

        if (user)
          res
            .status(200)
            .json({ user, message: "account created successfully" });
      });
    } catch (error) {
      console.log(`AuthService register error , ${error}`);
      return errorResponse(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      if (username && password) {
        let user = await UsersSerive.getUser({ username });
        if (!user)
          return res.status(404).json({
            message: "No user found, you may need to register first!",
          });

        bcrypt.compare(password, user.password, (err, result) => {
          if (err) res.status(403).json({ message: "incorrect password" });

          if (result) {
            let payload = { user };
            console.log(jwtOptions.secretOrKey);
            let token = jwt.sign(payload, jwtOptions.secretOrKey);
            return res.status(200).json({ message: "ok", token });
          } else return res.status(403).json({ message: "incorrect password" });
        });
      }
    } catch (error) {
      console.log(`AuthService login error , ${error}`);
      return errorResponse(error);
    }
  }
}

module.exports = AuthService;
