const express = require("express");
const router = express.Router();

const Authenticate = require("../middlewares/Authenticate");
const AdminMiddleware = require("../middlewares/AdminMiddleware");

const user_controller = require("../controllers/UserController");

const async_handler = require("../../utils/asyncHandler");
const Validations = require("../../validations");

router.get("/get_all_users", AdminMiddleware, user_controller.get_all_users);

router.get(
  "/get_single_user/:id",
  AdminMiddleware,
  user_controller.get_single_user
);

router.get("/get_me", Authenticate.user, user_controller.get_me);

router.post(
  "/create_user",
  AdminMiddleware,
  Validations.create_user,
  async_handler(user_controller.create_user)
);

router.patch(
  "/update_user/:id",
  AdminMiddleware,
  Validations.create_user,
  async_handler(user_controller.update_user)
);

router.delete(
  "/delete_user/:id",
  AdminMiddleware,
  async_handler(user_controller.delete_user)
);

module.exports = router;
