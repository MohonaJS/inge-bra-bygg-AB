const db = require("../configs/db_config");
const User = db.user;
const Task = db.task;
const Task_message = db.task_message;

const dashboard = (req, res) => {
  res.send("Admin Dashboard");
};

// -------------------------------------------
// USER RELATED METHODS
const get_users = async (req, res) => {
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

const create_user = async (req, res) => {
  res.send("create a user");
};

const update_user = async (req, res) => {
  res.send("updated a user");
};

const delete_user = async (req, res) => {
  res.send("delete a user");
};

// -------------------------------------------
// TASK RELATED METHODS
const create_task = async (req, res) => {
  // if (req.user.role == "admin") {
  //   const task = await Task.create(req.body);
  //   res.json("Task successfully created: " + task);
  // }
  let { task_id, client_id, image, status } = req.body;
  await Task.create(req.body);
  res.send(`${task_id} ${client_id} ${image} ${status}`);
};

const get_task = async (req, res) => {
  const task = await Task.findAll();
  res.json(task);
};

const update_task = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  await task.update(req.body, { where: { id } });
};

const delete_task = async (req, res) => {
  res.send("the task is deleted");
};

// -------------------------------------------
// TASK MESSAGE RELATED METHODS
const delete_task_message = async (req, res) => {
  res.send("the task message is deleted");
};

const delete_task_image = async (req, res) => {
  res.send("the task image is deleted");
};

module.exports = {
  dashboard,

  get_users,
  create_user,
  update_user,
  delete_user,

  create_task,
  get_task,
  update_task,
  delete_task,
  delete_user,

  delete_task_message,
  delete_task_image,
};
