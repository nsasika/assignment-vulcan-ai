const status = require("./status");

const successResponse = (data) => {
  return { status: status.SUCCESS, data };
};

const errorResponse = (error) => {
  return { status: status.FAIL, error };
};

const responseMapper = (statusCode, data = undefined, error = undefined) => {
  return { statusCode, data, error };
};

module.exports = { successResponse, errorResponse, responseMapper };
