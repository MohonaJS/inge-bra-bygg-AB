const db_config = require("./db_config");

const User = db_config.user;
const Task = db_config.task;
const Task_Message = db_config.task_message;
// const Conversation = db_config.conversation;

// User.belongsToMany(Conversation, { through: "ConversationUser" });
// Conversation.belongsToMany(User, { through: "ConversationUser" });

// Conversation.hasMany(Task_Message);
// Task_Message.belongsTo(Conversation);

// Task.hasOne(Conversation);
// Conversation.belongsTo(Task);

// Task.belongsTo(User);

// User.hasMany(Task);
// Task.belongsTo(User);

User.hasMany(Task, { foreignKey: "client_id" });
Task.belongsTo(User, { targetKey: "user_id", foreignKey: "client_id" });
Task.belongsTo(User, { targetKey: "user_id", foreignKey: "employee_id" });

// User.belongsToMany(Task, { through: Task_Message });
// Task.belongsToMany(User, { through: Task_Message });
// Task.belongsTo(Task);

module.exports = {
  User,
  Task,
  Task_Message,
  // Conversation,
};
