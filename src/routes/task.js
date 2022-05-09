const express = require("express");
const router = express.Router();

const asyncHandler = require("../../utils/asyncHandler");
const task_controller = require("../controllers/Task_Controller");

const Authenticate = require("../middlewares/Authenticate");
const AdminMiddleware = require("../middlewares/AdminMiddleware");
const EmployeeMiddleware = require("../middlewares/EmployeeMiddleware");

router.post(
  "/create_task",
  Authenticate.user,
  asyncHandler(task_controller.create_task)
),
  router.patch(
    "/update_task/:id",
    Authenticate.user,
    asyncHandler(task_controller.update_task)
  ),
  router.get(
    "/get_task",
    Authenticate.user,
    asyncHandler(task_controller.get_task)
  );

router.delete(
  "/delete_task/:id",
  Authenticate.user,
  asyncHandler(task_controller.delete_task)
);

router.post(
  "/:id/create_task_message",
  Authenticate.user,
  asyncHandler(task_controller.create_task_message)
);

module.exports = router;
