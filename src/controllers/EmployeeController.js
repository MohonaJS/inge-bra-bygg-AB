const db_config = require("../configs/db_config");
const Task = db_config.task;
const User = db_config.user;
const Task_message = db_config.task_message;

const employee_dashboard = (req, res) => {
  res.send("Employee Dashboard");
};

const create_task = async (req, res) => {
  let { task_id, name, image, status } = req.body;
  await Task.create(req.body);
};

const get_task = async (req, res) => {
  const user_id = req.user.id;
  if (req.user.role == "employee") {
    tasks = await Task.findAll({ where: { employee_id: user_id } });
  }
  res.json(tasks);
};

const update_task = async (req, res) => {
  res.send("the work is done");
};

const create_task_message = async (req, res) => {
  res.send("created task message");
};

const uploadImage = async (req, res) => {
  res.send("created task message");
};

module.exports = {
  employee_dashboard,
  create_task,
  get_task,
  update_task,

  create_task_message,
  uploadImage,
};
