const { DataTypes } = require("sequelize");
const sequelize = require("../configs/dbConfig");
require("dotenv").config();

const Task = sequelize.define(
  "Task",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    employee_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    client_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    status: {
      type: DataTypes.STRING,
      default: false,
    },
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Task;
