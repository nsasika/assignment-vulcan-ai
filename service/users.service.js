const { errorResponse, successResponse } = require("../consts/response");
const usersDAO = require("../dao/users.dao");

class UsersService {
  static async getAllUsers() {
    try {
      const users = await usersDAO.getAllUsers();
      return successResponse(users);
    } catch (error) {
      console.log(`UsersService getAllUsers error , ${error}`);
      return errorResponse(error);
    }
  }

  static async getUser(obj) {
    try {
      return await usersDAO.getUser(obj);
    } catch (error) {
      console.log(`UsersService getUser error , ${error.message}`);
      return errorResponse(error.message);
    }
  }

  static async createUser(obj) {
    try {
      const user = await usersDAO.createUser(obj);
      return successResponse(user);
    } catch (error) {
      console.log(`UsersService createUser error , ${error}`);
      return errorResponse(error.message);
    }
  }
}

module.exports = UsersService;
