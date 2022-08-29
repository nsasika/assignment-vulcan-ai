const apiResponse = require("./api.status")

const successResponse = (data) => { return { status: apiResponse.SUCCESS, data } }

const errorResponse = (error) => { return { status: apiResponse.FAIL, error } }

module.exports = { successResponse, errorResponse }