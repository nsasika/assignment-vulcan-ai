const { body } = require("express-validator");

const userRegisterValidation = [
  body("username")
    .exists({ checkFalsy: true })
    .withMessage("username is required")
    .isString()
    .withMessage("username should be string"),
  body("email")
    .exists({ checkFalsy: true })
    .withMessage("email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  body("password")
    .exists({ checkFalsy: true })
    .withMessage("password is required")
    .isLength({ min: 5 })
    .withMessage("password must be at least 5 chars long")
    .matches(/\d/)
    .withMessage("password must contain a number"),
  body("address")
    .exists({ checkFalsy: true })
    .withMessage("address is required")
    .isString()
    .withMessage("address should be string"),
];

const userLoginValidation = [
  body("username")
    .exists({ checkFalsy: true })
    .withMessage("username is required")
    .isString()
    .withMessage("username should be string"),
  body("password")
    .exists({ checkFalsy: true })
    .withMessage("password is required")
    .isString()
    .withMessage("passowrd should be string"),
];

module.exports = {
  userRegisterValidation,
  userLoginValidation,
};
