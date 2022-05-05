const express = require("express");
const app = new express();
const path = require("path");
const defaultPath = path.join(__dirname, "public");

const apiRouter = require("./src/routes/api");

// Api routes
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(defaultPath));
app.use("/", apiRouter);

// undefine routes
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "not found" });
});

module.exports = app;
