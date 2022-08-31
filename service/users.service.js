const { errorResponse, successResponse } = require("../consts/response");
const User = require("../models/users");

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return successResponse(users);
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
