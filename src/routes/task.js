const express = require("express");
const router = express.Router();

const async_handler = require("../../utils/asyncHandler");
const task_controller = require("../controllers/TaskController");

const Validations = require("../../validations");

const Authenticate = require("../middlewares/Authenticate");
const AdminMiddleware = require("../middlewares/AdminMiddleware");

router.post(
  "/create_task",
  Authenticate.user,
  Validations.create_task,
  async_handler(task_controller.create_task)
),
  router.patch(
    "/update_task/:id",
    Authenticate.user,
    Validations.create_task,
    async_handler(task_controller.update_task)
  ),
  router.get(
    "/get_tasks",
    Authenticate.user,
    async_handler(task_controller.get_tasks)
  );

router.get(
  "/get_single_task/:id",
  Authenticate.user,
  async_handler(task_controller.get_single_task)
);

router.delete(
  "/delete_task/:id",
  AdminMiddleware,
  async_handler(task_controller.delete_task)
);

router.post(
  "/create_task_message/:id",
  Authenticate.user,
  async_handler(task_controller.create_task_message)
);

router.get(
  "/get_task_message/:id",
  Authenticate.user,
  async_handler(task_controller.get_task_message)
);

router.delete(
  "/delete_task_message/:id",
  AdminMiddleware,
  async_handler(task_controller.delete_task_message)
);

module.exports = router;
