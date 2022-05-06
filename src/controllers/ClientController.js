const db_config = require("../configs/db_config");
const Task_message = db_config.task_message;

const dashboard = (req, res) => {
  res.send("client Dashboard");
};

const createMessage = async (req, res) => {
  let { message } = req.body;
  await Task_message.create(req.body);
};

const seeMyTask = async (req, res) => {
  let { message } = req.body;
  res.send("here is my task");
};

module.exports = {
  dashboard,
  createMessage,
  seeMyTask,
};
