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
      res.json(error);
    }
  },

  get_single_user: async (req, res) => {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
    });
    if (user) {
      res.json(user);
    } else {
      res.json("no user found");
    }
  },

  get_single_user: async (req, res) => {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
    });
    res.json(user);
  },

  get_me: async (req, res) => {
    const db_user = await User.findOne({ where: { id: req.user.id } });
    if (db_user) {
      res.json(db_user);
    } else {
      res.json("go to India");
    }
  },

  create_user: async (req, res) => {
    const existed_user = await User.findOne({ where: { name: req.body.name } });
    if (!existed_user) {
      const hash = generateHash(req.body.password);
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        role: req.body.role,
      });
      res.json("user is created");
    } else {
      res.json("user already exists");
    }
  },

  update_user: async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    const hash = generateHash(req.body.password);
    const new_user = user.update(
      {
        name: req.body.name,
        email: req.body.email,
        password: hash,
        role: req.body.role,
      },
      { where: { id } }
    );

    res.json("user updated ");
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

function generateHash(password) {
  const hash = bcrypt.hashSync(password, 10);
  return hash;
}
