const apiResponse = require("../consts/api.response");
const usersDAO = require("../dao/users.dao");

class UsersService {
  static async getAllUsers() {
    try {
      const users = await usersDAO.getAllUsers();
      return apiResponse.successResponse(users);
    } catch (error) {
      console.log(`UsersService getAllUsers error , ${error}`);
      return apiResponse.errorResponse(error);
    }
  }
}

module.exports = UsersService;
