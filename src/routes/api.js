const express = require("express");
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

const router = express.Router();

// different get methods for different users
router.get("/adminDashboard", (req, res) => {
  res.render("adminDashboard");
});

router.get("/workerDashboard", (req, res) => {
  res.render("workerDashboard");
});

router.get("/clientDashboard", (req, res) => {
  res.render("clientDashboard");
});

// registration
// router.get("/registration", RegistrationController.index);
// router.post("/registration", RegistrationController.storeAdmin);
// router.post("/admin", RegistrationController.storeAdmin);

// router.post("/employee", RegistrationController.storeEmployee);
// router.post("/registration", RegistrationController.storeClient);

// LOGIN
router.get("/login", LoginController.loginPage);
router.post("/login", LoginController.login);

// auth routes
router.get("/users", Authenticate, AdminController.userIndex);

// admin dashboard
// router.get("/admin-dashboard", AdminMiddleware, AdminController.dashboard);
router.get("/admin-dashboard", AdminMiddleware, AdminController.userIndex);

// employee dashboard
router.get(
  "/employee-dashboard",
  EmployeeMiddleware,
  EmployeeController.dashboard
);

// client dashboard
router.get("/client-dashboard", ClientMiddleware, ClientController.dashboard);

module.exports = router;
