const db = require("../configs/db_config");
const User = db.user;

const dashboard = (req, res) => {
  res.send("Admin Dashboard");
};

const userIndex = async (req, res) => {
  try {
    let users = await User.findAll();
    res.status(200).json({
      status: "ok",
      data: users,
    });
  } catch (error) {
    res.status(401).json({
      status: "not ok",
      message: error.message,
    });
  }
};

module.exports = {
  userIndex,
  dashboard,
};
