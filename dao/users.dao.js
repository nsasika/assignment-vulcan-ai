const User = require("../models/User");
const apiResponse = require("../consts/api.response");

class UsersDAO {
  static async getAllUsers() {
    try {
      return await User.findAll();
    } catch (error) {
      console.log(`UsersDAO getAllUsers error , ${error}`);
      return apiResponse.errorResponse(error.message);
    }
  }

  static async getUser(obj) {
    try {
      return await User.findOne({
        where: obj,
      });
    } catch (error) {
      console.log(`UsersDAO getUser error , ${error.message}`);
      return apiResponse.errorResponse(error.message);
    }
  }
}

module.exports = UsersDAO;
