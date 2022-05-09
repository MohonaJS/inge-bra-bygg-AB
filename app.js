const express = require("express");
const app = new express();

const path = require("path");
const defaultPath = path.join(__dirname, "public");
const bodyParser = require("body-parser");
const routes = require("./src/routes");

// Api routes
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(defaultPath));

app.use("/api", routes.auth);
app.use("/api/user", routes.user);
app.use("/api/task", routes.task);

// undefine routes
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "not found" });
});

module.exports = app;
