const express = require("express");
const router = express.Router();

const Authenticate = require("../middlewares/Authenticate");
const EmployeeMiddleware = require("../middlewares/EmployeeMiddleware");
const ImageController = require("../controllers/ImageController");

const fileUpload = require("express-fileupload");

router.get("/get_image", Authenticate.user, ImageController.get_image);

router.post(
  "/upload_image",
  EmployeeMiddleware,
  fileUpload({ useTempFiles: true }),
  ImageController.upload_image
);

module.exports = router;
