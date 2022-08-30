const response = require("../consts/response");
const usersDAO = require("../dao/users.dao");

class UsersService {
  static async getAllUsers() {
    try {
      const users = await usersDAO.getAllUsers();
      return response.successResponse(users);
    } catch (error) {
      console.log(`UsersService getAllUsers error , ${error}`);
      return response.errorResponse(error);
    }
  }

  static async getUser(obj) {
    try {
      const user = await usersDAO.getUser(obj);
      return response.successResponse(user);
    } catch (error) {
      console.log(`UsersService getUser error , ${error.message}`);
      return response.errorResponse(error.message);
    }
  }

  static async createUser(obj) {
    try {
      return await usersDAO.createUser(obj);
    } catch (error) {
      console.log(`UsersService createUser error , ${error}`);
      return response.errorResponse(error);
    }
  }
}

module.exports = UsersService;
