const router = require("express").Router();
const { userLogin, userRegister } = require("../controller/auth.controller");
const {
  userRegisterValidation,
  userLoginValidation,
} = require("../validation/user.validation");

router.post("/login", userLoginValidation, userLogin);

router.post("/register", userRegisterValidation, userRegister);

module.exports = router;
