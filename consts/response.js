const status = require("./status");

const successResponse = (data) => {
  return { status: status.SUCCESS, data };
};

const errorResponse = (error) => {
  return { status: status.FAIL, error };
};

const responseMapper = (statusCode, data, res) => {
  return { statusCode, data, res };
};

module.exports = { successResponse, errorResponse, responseMapper };
