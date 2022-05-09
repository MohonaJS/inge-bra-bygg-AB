const express = require("express");
const router = express.Router();

const Authenticate = require("../middlewares/Authenticate");
const AdminMiddleware = require("../middlewares/AdminMiddleware");
const EmployeeMiddleware = require("../middlewares/EmployeeMiddleware");
const user_controller = require("../controllers/User_Controller");

const asyncHandler = require("../../utils/asyncHandler");
const Validations = require("../../validations");

router.get("/get_all_users", Authenticate.user, user_controller.get_all_users);

router.get("/get_single_user/:id", user_controller.get_single_user);

router.post(
  "/create_user",
  AdminMiddleware,
  Validations.createUser,
  asyncHandler(user_controller.create_user)
);

router.delete(
  "/delete_user/:id",
  AdminMiddleware,
  asyncHandler(user_controller.delete_user)
);

module.exports = router;
