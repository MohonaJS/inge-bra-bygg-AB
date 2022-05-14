const Task = require("../models/Task");

module.exports = {
  upload_image: async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByPk(id);

    if (req.user.role == "client") {
      res.json({ message: "not allowed" });
    }

    const image = req.file.filename;

    if (task) {
      if (req.user.role == "admin" || req.user.role == "employee") {
        await task.update({ image: image }, { where: { id } });
        res.json({ message: "image is uploaded" });
      }
    } else {
      res.json({ message: "no task found. enter a valid task" });
    }
  },

  get_image: async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    const user_id = req.user.id;
    const role = req.user.role;

    if (role == "client" && task.client_id != user_id) {
      res.json({ message: "not allowed" });
    }

    const show_image = await Task.findOne({
      attributes: ["image"],
      where: { id: id },
    });
    res.json(show_image);
  },

  //   tried a lot but does not work. either the whole task is deleted or
  // nothing else. don't know how to delete one specific column from a table
  /*   delete_image: async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    if (task) {
      await task.destroy({
        // attributes: ["image"],
        where: { id: id },
      });
      res.json({ message: "image is deleted!" });
    } else {
      res.json({ message: "image does not exist!" });
    }
  }, */
};
