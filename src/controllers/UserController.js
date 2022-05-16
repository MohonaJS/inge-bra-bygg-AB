const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  get_all_users: async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: { exclude: ["password"] },
      });

      res.json(users);
    } catch (error) {
      res.json(error.message);
    }
  },

  get_single_user: async (req, res) => {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
    });
    if (user) {
      res.json(user);
    } else {
      res.json({ message: "no user found" });
    }
  },

  get_me: async (req, res) => {
    const db_user = await User.findOne({
      where: { id: req.user.id },
      attributes: { exclude: ["password"] },
    });
    if (db_user) {
      res.json(db_user);
    } else {
      res.json({ message: "try again" });
    }
  },

  create_user: async (req, res) => {
    const existed_user = await User.findOne({ where: { name: req.body.name } });
    if (!existed_user) {
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
      });
      res.json({ message: "user is created" });
    } else {
      res.json({ message: "user already exists" });
    }
  },

  update_user: async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    const new_user = user.update(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
      },
      { where: { id } }
    );

    res.json({ message: "user updated " });
  },

  delete_user: async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: "user is deleted!" });
    } else {
      res.json({ message: "user does not exist!" });
    }
  },
};
