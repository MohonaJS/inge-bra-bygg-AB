const express = require("express");
const app = new express();

const apiRouter = require("./src/routes/api");

// Api routes
app.use("/api/v1", apiRouter);

// undefine routes
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "not found" });
});

module.exports = app;
