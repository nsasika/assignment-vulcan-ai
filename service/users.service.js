const {
  errorResponse,
  successResponse,
  responseMapper,
} = require("../consts/response");
const User = require("../models/users");

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    if (users) return responseMapper(200, { users, total: users.length });
    else return responseMapper(404, null, "No users found");
  } catch (error) {
    console.log(`UsersService getAllUsers error , ${error}`);
    return errorResponse(error);
  }
};

const getUser = async (obj) => {
  try {
    return await User.findOne({
      where: obj,
    });
  } catch (error) {
    console.log(`UsersService getUser error , ${error.message}`);
    return errorResponse(error.message);
  }
};

const createUser = async (obj) => {
  try {
    const user = await User.create(obj);
    return successResponse(user);
  } catch (error) {
    console.log(`UsersService createUser error , ${error}`);
    return errorResponse(error.message);
  }
};

module.exports = { createUser, getUser, getAllUsers };
