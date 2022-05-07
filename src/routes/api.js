const express = require("express");
const router = express.Router();

// const RegistrationController = require("../controllers/auth/RegistrationController");
const LoginController = require("../controllers/auth/LoginController");
const AdminController = require("../controllers/AdminController");
const EmployeeController = require("../controllers/EmployeeController");
const ClientController = require("../controllers/ClientController");

// MIDDLEWARES
const Authenticate = require("../middlewares/Authenticate");
const AdminMiddleware = require("../middlewares/AdminMiddleware");
const EmployeeMiddleware = require("../middlewares/EmployeeMiddleware");
const ClientMiddleware = require("../middlewares/ClientMiddleware");

// LOGIN
router.get("/login", LoginController.loginPage);
router.post("/login", LoginController.login);

// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// AUTH ROUTES
// ADMIN DASHBOARD
router.get("/admin_dashboard", Authenticate, AdminController.dashboard);

router.get("/get_users", Authenticate, AdminController.get_users);
router.post("/create_user", AdminMiddleware, AdminController.create_user);
router.patch("/update_user/:id", AdminMiddleware, AdminController.update_user);
router.delete("/delete_user/:id", AdminMiddleware, AdminController.delete_user);

router.post("/create_task", AdminMiddleware, AdminController.create_task);
router.get("/get_task", AdminMiddleware, AdminController.get_task);
router.patch("/update_task/:id", AdminMiddleware, AdminController.update_task);
router.delete("/delete_task/:id", AdminMiddleware, AdminController.delete_task);

router.delete(
  "/delete_task_message/:id",
  AdminMiddleware,
  AdminController.delete_task_message
);

router.delete(
  "/delete_task_image/:id",
  AdminMiddleware,
  AdminController.delete_task_image
);

// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// EMPLOYEE DASHBOARD
router.get(
  "/employee_dashboard",
  EmployeeMiddleware,
  EmployeeController.employee_dashboard
);
router.post("/create_task", EmployeeMiddleware, EmployeeController.create_task);
router.get("/get_task/:id", EmployeeMiddleware, EmployeeController.get_task);
router.patch(
  "/update_task/:id",
  EmployeeMiddleware,
  EmployeeController.update_task
);

router.post(
  "/create_task_message",
  EmployeeMiddleware,
  EmployeeController.create_task_message
);

router.post("/uploadImage", EmployeeMiddleware, EmployeeController.uploadImage);

// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// CLIENT DASHBOARD
router.get(
  "/client_dashboard",
  ClientMiddleware,
  ClientController.client_dashboard
);
router.get("/see_my_task", ClientMiddleware, ClientController.see_my_task);
router.post("/create_task_message", ClientController.create_task_message);

module.exports = router;
