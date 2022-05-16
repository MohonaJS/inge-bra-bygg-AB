const Task = require("../models/Task");
const TaskMessage = require("../models/TaskMessage");

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

    if (role == "employee" || role == "admin") {
      const task = await Task.create({
        title: title,
        desc: desc,
        client_id: client_id,
        image: image,
        status: status,
        employee_id: id,
      });
      res.json({ message: "task is created" });
    }
  },

  update_task: async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByPk(id);

    if (req.user.role == "client") {
      res.json({ message: "you are not allowed" });
    }

    await task.update(req.body, { where: { id } });
    res.json({ message: "task updated " });
  },

  get_tasks: async (req, res, next) => {
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
    try {
      const id = req.params.id;
      const task = await Task.findByPk(id);
      const user_id = req.user.id;
      const role = req.user.role;

      if (role == "client" && task.client_id != user_id) {
        res.json({ message: "not allowed" });
      }

      if (role == "employee" && task.employee_id != user_id) {
        res.json({ message: "not allowed" });
      }

      const show_task = await Task.findOne({ where: { id: id } });
      if (show_task) {
        res.json(show_task);
      }
    } catch (error) {
      res.json({ message: "Something went wrong. Contact your admin" });
    }
  },

  delete_task: async (req, res) => {
    try {
      const id = req.params.id;
      const task = await Task.findByPk(req.params.id);
      if (task) {
        await task.destroy();
        res.json({ message: "task is deleted" });
      } else {
        res.json({ message: "task does not exist" });
      }
    } catch (error) {
      res.json({ message: "Something went wrong. Contact your admin" });
    }
  },

  create_task_message: async (req, res) => {
    let id = req.user.id;
    let task_id = req.params.id;

    const found_task = await Task.findByPk(task_id);

    let task_message = req.body.task_message_content;

    if (found_task) {
      const task = await TaskMessage.create({
        task_message_content: task_message,
        user_id: id,
        task_id: task_id,
      });
      res.json({ message: "task message is created" });
    } else {
      res.json({
        message: "no task found. please enter a correct task number",
      });
    }
  },

  get_task_message: async (req, res) => {
    try {
      const id = req.params.id;
      const task = await Task.findByPk(id);

      const user_id = req.user.id;
      const role = req.user.role;

      if (role == "client" && task.client_id != user_id) {
        res.json({ message: "not allowed" });
      }

      if (role == "employee" && task.employee_id != user_id) {
        res.json({ message: "not allowed" });
      }

      const msg = await TaskMessage.findAll({ where: { task_id: id } });
      if (msg) {
        res.json(msg);
      } else {
        throw new Error("not found");
      }
    } catch (error) {
      res.json({ message: "Something went wrong. Contact your admin" });
    }
  },

  delete_task_message: async (req, res) => {
    const id = req.params.id;
    const task_message = await TaskMessage.findByPk(req.params.id);
    if (task_message) {
      await task_message.destroy();
      res.json({ message: "task message is deleted" });
    } else {
      res.json({ message: "task message does not exist" });
    }
  },
};
