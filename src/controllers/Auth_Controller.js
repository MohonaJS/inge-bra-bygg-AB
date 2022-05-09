const db = require("../configs/db_config");
const User = db.user;

module.exports = {
  async authenticate(req, res) {
    const token = await User.login(req.body.name, req.body.password);
    res.json(token);
  },
};
