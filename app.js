const express = require("express");
const app = new express();

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const routes = require("./src/routes");

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Api routes
app.use("/api", routes.auth);
app.use("/api/user", routes.user);
app.use("/api/task", routes.task);
app.use("/api/images", routes.images);

// undefine routes
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "no endpoint found" });
});

app.listen(process.env.RUNNING_PORT, () => {
  console.log(`server runs successfully at port ${process.env.RUNNING_PORT}`);
});

module.exports = app;
