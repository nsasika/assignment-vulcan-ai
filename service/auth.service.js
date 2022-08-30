const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");
const { jwtOptions } = require("../config/jwtOptions");
const apiResponse = require("../consts/api.response");
const usersSerive = require("../service/users.service");

class AuthService {
  static async register(req, res, next) {
    const { username, email, password, address } = req.body;
    let { data: user } = await usersSerive.getUser({ email: email });
    if (user) return res.status(409).json({ message: "email already exists" });

    bcrypt.hash(password, null, null, (err, hash) => {
      if (err) res.status(409).json({ message: "can not create user" });
      usersSerive
        .createUser({ username, email, password: hash, address })
        .then((user) =>
          res.status(200).json({ user, msg: "account created successfully" })
        );
    });
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (email && password) {
        let { data: user } = await usersSerive.getUser({ email });
        if (!user) return res.status(404).json({ message: "No user found" });
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
      return apiResponse.errorResponse(error);
    }
  }
}

module.exports = AuthService;
