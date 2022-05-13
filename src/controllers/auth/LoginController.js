const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const User = require("../../models/User");

const login = async (req, res) => {
  let { name, password } = req.body;
  let user = await User.findOne({ where: { name } });

  if (!user) {
    res.json({ message: "user not found" });
  }

  let match_password = await bcrypt.compare(password, user.password);

  if (match_password) {
    let payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    };
    let token = jwt.sign(payload, process.env.SECRET, { expiresIn: "2w" });
    res.json({
      status: "ok",
      token,
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
};
