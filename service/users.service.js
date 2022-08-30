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

  static async getUser(obj) {
    try {
      const user = await usersDAO.getUser(obj);
      return apiResponse.successResponse(user);
    } catch (error) {
      console.log(`UsersService getUser error , ${error.message}`);
      return apiResponse.errorResponse(error.message);
    }
  }

  static async createUser(obj) {
    try {
      return await usersDAO.createUser(obj);
    } catch (error) {
      console.log(`UsersService createUser error , ${error}`);
      return apiResponse.errorResponse(error);
    }
  }
}

module.exports = UsersService;
