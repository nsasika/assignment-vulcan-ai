const AuthService = require("../service/auth.service");

class AuthController {
  static async login(req, res, next) {
    try {
      return await AuthService.login(req, res, next);
    } catch (error) {
      console.log(`AuthController login error , ${error}`);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AuthController;
