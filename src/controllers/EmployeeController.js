const db_config = require("../configs/db_config");
const Task = db_config.task;
const User = db_config.user;
const Task_message = db_config.task_message;

const dashboard = (req, res) => {
  res.send("Employee Dashboard");
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
  if (req.user.userRole == "client") {
    tasks = await Task.findAll({ where: { client_id: user_id } });
  }
  if (req.user.userRole == "employee") {
    tasks = await Task.findAll({ where: { employee_id: user_id } });
  }
  res.json(tasks);
};

const updateTask = async (req, res) => {
  res.send("the work is done");
};

module.exports = {
  dashboard,
  createTask,
  getTask,
  updateTask,
};
