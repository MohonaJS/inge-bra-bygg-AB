const express = require("express");
const router = express.Router();

const asyncHandler = require("../../utils/asyncHandler");
const task_controller = require("../controllers/Task_Controller");
const Validations = require("../../validations");

const Authenticate = require("../middlewares/Authenticate");
const AdminMiddleware = require("../middlewares/AdminMiddleware");

router.post(
  "/create_task",
  Authenticate.user,
  Validations.create_task,
  asyncHandler(task_controller.create_task)
),
  router.patch(
    "/update_task/:id",
    Authenticate.user,
    Validations.create_task,
    asyncHandler(task_controller.update_task)
  ),
  router.get(
    "/get_tasks",
    Authenticate.user,
    asyncHandler(task_controller.get_tasks)
  );

router.get(
  "/get_single_task/:id",
  Authenticate.user,
  asyncHandler(task_controller.get_single_task)
);

router.delete(
  "/delete_task/:id",
  AdminMiddleware,
  asyncHandler(task_controller.delete_task)
);

router.post(
  "/:id/create_task_message",
  Authenticate.user,
  asyncHandler(task_controller.create_task_message)
);

router.get(
  "/:id/get_task_message",
  Authenticate.user,
  asyncHandler(task_controller.get_task_message)
);

router.delete(
  "/:id/delete_task_message",
  AdminMiddleware,
  asyncHandler(task_controller.delete_task_message)
);

module.exports = router;
