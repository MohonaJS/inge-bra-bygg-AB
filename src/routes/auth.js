const express = require("express");
const router = express.Router();

const { login } = require("../controllers/auth/LoginController");
const asyncHandler = require("../../utils/asyncHandler");
const Validations = require("../../validations");

// LOGIN
router.post("/login", Validations.login, asyncHandler(login));

module.exports = router;
