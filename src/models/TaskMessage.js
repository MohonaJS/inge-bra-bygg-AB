const { DataTypes } = require("sequelize");
const sequelize = require("../configs/dbConfig");
require("dotenv").config();

const TaskMessage = sequelize.define(
  "TaskMessage",
  {
    task_message_content: {
      type: DataTypes.STRING,
    },

    task_id: {
      type: DataTypes.INTEGER,
    },

    user_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
module.exports = TaskMessage;
