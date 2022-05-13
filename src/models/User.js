const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { DataTypes } = require("sequelize");
const sequelize = require("../configs/dbConfig");

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
  const hash_password = await bcrypt.hash(user.password, 10);
  user.password = hash_password;
});

module.exports = User;
