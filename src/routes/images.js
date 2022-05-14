const express = require("express");
const router = express.Router();
const multer = require("multer");

const Authenticate = require("../middlewares/Authenticate");
const AdminMiddleware = require("../middlewares/AdminMiddleware");
const ImageController = require("../controllers/ImageController");
const async_handler = require("../../utils/asyncHandler");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.get(
  "/get_image/:id",
  Authenticate.user,
  async_handler(ImageController.get_image)
);

router.post(
  "/upload_image/:id",
  Authenticate.user,
  upload.single("image"),
  ImageController.upload_image
);

// router.delete(
//   "/delete_image/:id",
//   AdminMiddleware,
//   ImageController.delete_image
// );

module.exports = router;
