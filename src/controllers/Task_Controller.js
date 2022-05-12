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
    const title = req.body.title;
    const desc = req.body.desc;
    const client_id = req.body.client_id;
    const image = req.body.image;
    const status = req.body.status;
    let id = req.user.id;

    if (role == "employee" || role == "admin") {
      const task = await Task.create({
        title: title,
        desc: desc,
        client_id: client_id,
        image: image,
        status: status,
        user_id: id,
      });

      res.json("task is created by " + req.user.name);
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
    let text_message = req.body.task_message_content;
    let id = req.user.id;

    const task = await Task_message.create({
      task_message_content: text_message,
      user_id: id,
    });

    res.json("task message is created by  " + req.user.name);
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
