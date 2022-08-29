const express = require('express');
const router = express.Router();
const UsersCtrl = require("../controller/users.controller")

router.route("").get(UsersCtrl.getAllUsers)

module.exports = router;


