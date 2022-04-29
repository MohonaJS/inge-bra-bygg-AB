const express = require("express");
const TestController = require("../controllers/TestController");

const router = express.Router();

router.get("/", TestController.index);
router.post("/", TestController.create);

module.exports = router;
