const router = require("express").Router();
const AuthCtrl = require("../controller/auth.controller");

router.post("/login", AuthCtrl.login);

router.post("/register", AuthCtrl.register);

module.exports = router;
