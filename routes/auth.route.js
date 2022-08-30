const router = require("express").Router();
const AuthCtrl = require("../controller/auth.controller");
const {
  userRegisterValidation,
  userLoginValidation,
} = require("../validation/user.validation");

router.post("/login", userLoginValidation, AuthCtrl.login);

router.post("/register", userRegisterValidation, AuthCtrl.register);

module.exports = router;
