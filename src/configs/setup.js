const User = require("../models/User");
const Task = require("../models/Task");
const Task_message = require("../models/Task_message");

const db = require("./db_config");

User.hasMany(Task);
Task.belongsTo(User);

Task_message.belongsTo(User, { foreignKey: "user_id" });
Task_message.belongsTo(Task, { foreignKey: "task_id" });

db.sync({ force: true });
