const db_config = require("./db_config");

const User = db_config.user;
const Task_Message = db_config.task_message;
const Task = db_config.task;
const Conversation = db_config.conversation;
const Conversation_Message = db_config.conversation_message;

// 1- client can create a message
User.hasMany(Task_Message, { as: "message" });
Task_Message.belongsTo(User, { as: "user" });

// User.belongsToMany(Conversation, { through: "ConversationUser" });
// Conversation.belongsToMany(User, { through: "ConversationUser" });

// Conversation.hasMany(Task_Message);
// Task_Message.belongsTo(Conversation);

// Task.hasOne(Conversation);
// Conversation.belongsTo(Task);

// Task.belongsTo(User);

// User.hasMany(Task);
// Task.belongsTo(User);

// 2 - we create a task against that message
// 3 - we create a conversation against that task where we will have
// many conversation message that both party can see
//

module.exports = {
  User,
  Task,
  Task_Message,
  Conversation,
  Conversation_Message,
};
