const UsersService = require("../service/users.service");
const checkAndReturnResponse = require("../utils/util");

class UsersController {
  static async getAllUsers(req, res, next) {
    try {
      const { status, data, error } = await UsersService.getAllUsers();
      checkAndReturnResponse(res, status, data, error);
    } catch (error) {
      console.log(`UsersController getAllUsers error , ${error}`);
      res.status(500).json({ error: error.message });
    }
  }

  static async getUser(obj) {
    try {
      const { status, data, error } = await UsersController.getUser(obj);
      checkAndReturnResponse(res, status, data, error);
    } catch (error) {
      console.log(`UsersController getUser error , ${error}`);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UsersController;
