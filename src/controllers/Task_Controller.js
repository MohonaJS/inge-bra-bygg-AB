const db = require("../configs/db_config");
const Task = db.task;
const Task_message = db.task_message;
const User = db.user;

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

  create_task_message: async (req, res) => {
    const task = await Task_message.create(req.body);
    res.json("task message is created");
  },

  get_task_message: async (req, res) => {
    const task_message = await Task_message.findAll();
    res.json(task_message);
  },

  delete_task: async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByPk(req.params.id);
    await task.destroy();
    res.json({ message: "task is deleted!" });
  },
};