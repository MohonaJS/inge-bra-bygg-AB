const db = require("../../configs/db_config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const User = db.user;

const loginPage = async (req, res) => {
  res.render("login");
};

const login = async (req, res) => {
  let { user_id, password } = req.body;
  let user = await User.findOne({ where: { user_id: user_id } });
  let hashPassword;
  if (user) hashPassword = await bcrypt.compare(password, user.password);

  let payload = {
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: user,
  };

  if (user && hashPassword) {
    // res.render("dashboard");
    res.status(200).json({
      status: "ok",
      data: user,
      token: jwt.sign(payload, process.env.SECRET),
      message: "Login Successfully",
    });
  } else {
    res.status(401).json({
      status: "not ok",
      message: "Invalid User or Password",
    });
  }
};

module.exports = {
  login,
  loginPage,
};
