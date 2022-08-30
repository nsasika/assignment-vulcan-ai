const { errorResponse, successResponse } = require("../consts/response");
const usersDAO = require("../dao/users.dao");

const getAllUsers = async () => {
  try {
    const users = await usersDAO.getAllUsers();
    return successResponse(users);
  } catch (error) {
    console.log(`UsersService getAllUsers error , ${error}`);
    return errorResponse(error);
  }
};

const getUser = async (obj) => {
  try {
    return await usersDAO.getUser(obj);
  } catch (error) {
    console.log(`UsersService getUser error , ${error.message}`);
    return errorResponse(error.message);
  }
};

const createUser = async (obj) => {
  try {
    const user = await usersDAO.createUser(obj);
    return successResponse(user);
  } catch (error) {
    console.log(`UsersService createUser error , ${error}`);
    return errorResponse(error.message);
  }
};

module.exports = { createUser, getUser, getAllUsers };
