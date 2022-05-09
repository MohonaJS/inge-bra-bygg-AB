const db = require("../configs/db_config");
const User = db.user;
const bcrypt = require("bcrypt");

module.exports = {
  get_all_users: async (req, res) => {
    if (req.user.role == "admin" || req.user.role == "employee") {
      const users = await User.findAll({});
      res.json(users);
    } else if (req.user.role == "client") {
      const user = await User.findOne({ where: { role: req.user.role } });
      res.json(user);
    }
  },

  get_single_user: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
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
    res.json("update the user");
  },

  delete_user: async (req, res) => {
    res.json("delete the user");
  },
};

function generateHash(password) {
  const hash = bcrypt.hashSync(password, 10);
  return hash;
}
