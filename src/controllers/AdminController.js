const db = require("../configs/db_config");
const User = db.user;

const dashboard = (req, res) => {
  res.send("Admin Dashboard");
};

const userIndex = async (req, res) => {
  try {
    let users = await User.findAll();
    res.status(200).json({
      status: "ok",
      data: users,
    });
  } catch (error) {
    res.status(401).json({
      status: "not ok",
      message: error.message,
    });
  }
};

const createTask = async (req, res) => {
  let { task_id, name, image, status } = req.body;
  console.log(task_id, name, image, status);
  await Task.create(req.body);
  // res.send(`${task_id} ${name} ${image} ${status}`);
};

const getTask = async (req, res) => {
  const user_id = req.user.id;
  if (req.user.role == "admin") {
    tasks = await Task.findAll({});
  }
  res.json(tasks);
};

const updateTask = async (req, res) => {
  res.send("the task is updated");
};

const deleteTask = async (req, res) => {
  res.send("the task is deleted");
};

const deleteUser = async (req, res) => {
  res.send("the user is deleted");
};

module.exports = {
  dashboard,
  userIndex,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteUser,
};
