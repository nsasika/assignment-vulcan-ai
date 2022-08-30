const User = require("../models/User");

class UsersDAO {
  static async getAllUsers() {
    return await User.findAll();
  }

  static async getUser(obj) {
    return await User.findOne({
      where: obj,
    });
  }

  static async createUser(obj) {
    return await User.create(obj);
  }
}

module.exports = UsersDAO;
