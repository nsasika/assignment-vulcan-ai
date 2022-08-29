const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");
const { jwtOptions } = require("../config/jwtOptions");
const apiResponse = require("../consts/api.response");
const usersSerive = require("../service/users.service");

class AuthService {
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
