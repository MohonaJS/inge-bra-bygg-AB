const Task = require("../models/Task");
const Task_message = require("../models/Task_message");

const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  create_task: async (req, res) => {
    const role = req.user.role;
    if (role == "client") {
      throw new Error();
    }

    const { title, desc, client_id, image, status } = req.body;

    let id = req.user.id;
    console.log(id);

    if (role == "employee" || role == "admin") {
      const task = await Task.create({
        title: title,
        desc: desc,
        client_id: client_id,
        image: image,
        status: status,
        employee_id: id,
      });
      res.json("Task is created by " + req.user.name);
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

  get_tasks: async (req, res) => {
    if (req.user.role == "admin") {
      const tasks = await Task.findAll({});
      res.json(tasks);
    } else if (req.user.role == "employee") {
      const tasks = await Task.findAll({ where: { employee_id: req.user.id } });
      res.json(tasks);
    } else if (req.user.role == "client") {
      const tasks = await Task.findAll({ where: { client_id: req.user.id } });
      res.json(tasks);
    } else {
      res.json("error");
    }
  },

  get_single_task: async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    const user_id = req.user.id;
    const role = req.user.role;

    if (role == "client" && task.client_id != user_id) {
      res.json("not allowed");
    }
    if (role == "employee" && task.employee_id != user_id) {
      res.json("not allowed");
    }

    const t = await Task.findAll({ where: { id: id } });
    res.json(t);
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
    let id = req.user.id;
    let task_id = req.params.id;
    let task_message = req.body.task_message_content;
    const task = await Task_message.create({
      task_message_content: task_message,
      user_id: id,
      task_id: task_id,
    });

    res.json("task message is created by  " + req.user.name);
  },

  get_task_message: async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    const user_id = req.user.id;
    const role = req.user.role;

    if (role == "client" && task.client_id != user_id) {
      res.json("not allowed");
    }
    if (role == "employee" && task.employee_id != user_id) {
      res.json("not allowed");
    }

    const msg = await Task_message.findAll({ where: { task_id: id } });
    res.json(msg);
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
