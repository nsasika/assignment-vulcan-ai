const resStatus = require("../consts/status");

const checkAndReturnResponse = (res, status, data, error) => {
  switch (status) {
    case resStatus.SUCCESS:
      return res.status(200).json(data);
    case resStatus.FAIL:
      return res.status(500).json({ status, error: error.message });
  }
};

module.exports = { checkAndReturnResponse };
