const { validationResult } = require("express-validator");
const { login, register } = require("../service/auth.service");

const userRegister = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    return await register(req, res, next);
  } catch (error) {
    console.log(`AuthController register error , ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

const userLogin = async (req, res, next) => {
  try {
    return await login(req, res, next);
  } catch (error) {
    console.log(`AuthController login error , ${error}`);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { userLogin, userRegister };
