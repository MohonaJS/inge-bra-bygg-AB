// const db_config = require("../configs/db_config");

// const User = db_config.user;
// const Task_Message = db_config.task_message;
// const Task = db_config.task;

// module.exports = function setupModels() {
//   User.hasMany(Task_Message, {
//     foreignKey: "message",
//   });

//   Task_Message.belongsTo(User, {
//     foreignKey: "user_id",
//   });

//   User.hasMany(Task, {
//     foreignKey: "user_id",
//   });

//   Task.belongsTo(User, {
//     foreignKey: "user_id",
//   });
// };
