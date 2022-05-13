const { DataTypes } = require("sequelize");
const sequelize = require("../configs/db_config");
require("dotenv").config();

const Task_Message = sequelize.define(
  "Task_Message",
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
module.exports = Task_Message;
