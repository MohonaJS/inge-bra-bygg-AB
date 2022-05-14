const User = require("../models/User");
const Task = require("../models/Task");
const TaskMessage = require("../models/TaskMessage");

const db = require("./dbConfig");

User.hasMany(Task);
Task.belongsTo(User);
TaskMessage.belongsTo(User, { foreignKey: "user_id" });
TaskMessage.belongsTo(Task, { foreignKey: "task_id" });

db.sync({ force: true });
