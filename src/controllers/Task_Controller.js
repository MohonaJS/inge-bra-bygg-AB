const db = require("../configs/db_config");
const Task = db.task;
const Task_message = db.task_message;
const User = db.user;

const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  create_task: async (req, res) => {
    const role = req.user.role;
    if (role == "client") {
      res.json("you are not allowed");
    }
    if (role == "employee" || role == "admin") {
      const task = await Task.create(req.body);
      res.json("task is created");
    }
  },

  update_task: async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByPk(id);

    if (req.user.role == "client") {
      res.json("you are not allowed");
    }

    await task.update(req.body, { where: { id } });
    res.json("task updated ");
  },

  get_task: async (req, res) => {
    const tasks = await Task.findAll();

    if (req.user.role == "client") {
      res.json("you are not allowed");
    } else {
      res.json(tasks);
    }
  },

  delete_task: async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByPk(req.params.id);
    if (task) {
      await task.destroy();
      res.json({ message: "task is deleted!" });
    } else {
      res.json({ message: "task does not exist!" });
    }
  },

  create_task_message: async (req, res) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    const user = jwt.verify(token, process.env.SECRET);
    const newVar = User.findByPk(user.id);
    let text_message = { task_message_content: req.body.task_message_content };
    await newVar.message(text_message);
    // const task = await Task_message.create(req.body);
    // res.json("task message is created");
  },

  get_task_message: async (req, res) => {
    const task_message = await Task_message.findAll();
    res.json(task_message);
  },

  delete_task_message: async (req, res) => {
    const id = req.params.id;
    const task_message = await Task_message.findByPk(req.params.id);
    if (task_message) {
      await task_message.destroy();
      res.json({ message: "task message is deleted!" });
    } else {
      res.json({ message: "task message does not exist!" });
    }
  },
};
