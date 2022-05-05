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
  let { name, password } = req.body;
  let user = await User.findOne({ where: { name } });
  // let dbPassword = await User.findOne({ where: { password } });
  let hashPassword = await bcrypt.compare(password, user.password);

  let payload = {
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: user,
  };

  if (user && hashPassword) {
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
