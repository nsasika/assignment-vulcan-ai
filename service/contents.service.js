const { errorResponse } = require("../consts/response");
const Content = require("../models/contents");

const bulkCreateContent = async (obj) => {
  try {
    return await Content.bulkCreate(obj);
  } catch (error) {
    console.log(`ContentService createContent error , ${error}`);
    return errorResponse(error.message);
  }
};

module.exports = { bulkCreateContent };
