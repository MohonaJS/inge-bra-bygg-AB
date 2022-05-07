const db_config = require("../configs/db_config");
const Task_message = db_config.task_message;

const client_dashboard = (req, res) => {
  res.send("client Dashboard");
};

const see_my_task = async (req, res) => {
  res.send("here is my task");
};

const create_task_message = async (req, res) => {
  await Task_message.create(req.body);
};

module.exports = {
  client_dashboard,
  create_task_message,
  see_my_task,
};
