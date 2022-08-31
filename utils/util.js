const { SUCCESS, FAIL } = require("../consts/status");

const checkAndReturnResponse = (res, status, data, error) => {
  switch (status) {
    case SUCCESS:
      return res.status(200).json(data);
    case FAIL:
      return res.status(500).json({ status, error: error.message });
    default:
      break;
  }
};

module.exports = { checkAndReturnResponse };
