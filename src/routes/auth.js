const express = require("express");
const router = express.Router();

const Authenticate_Controller = require("../controllers/Auth_Controller");
const asyncHandler = require("../../utils/asyncHandler");
const Validations = require("../../validations");

// LOGIN
router.post(
  "/login",
  Validations.login,
  asyncHandler(Authenticate_Controller.authenticate)
);

module.exports = router;
