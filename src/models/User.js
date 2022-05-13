const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { DataTypes } = require("sequelize");
const sequelize = require("../configs/db_config");

require("dotenv").config();

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    enum: ["admin", "employee", "client"],
    defaultValue: "client",
    allowNull: false,
  },
});

User.beforeCreate(async (user, options) => {
  const bcrypt = require("bcrypt");
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
});

module.exports = User;
