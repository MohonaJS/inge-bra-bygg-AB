const db_config = require("./db_config");

const User = db_config.user;
const Task = db_config.task;
const Task_Message = db_config.task_message;
const Conversation = db_config.conversation;

//  users - tasks - task_messages - conversations

User.belongsToMany(Conversation, { through: "ConversationUser" });
Conversation.belongsToMany(User, { through: "ConversationUser" });

Conversation.hasMany(Task_Message);
Task_Message.belongsTo(Conversation);

Task.hasOne(Conversation);
Conversation.belongsTo(Task);

Task.belongsTo(User);

module.exports = {
  User,
  Task,
  Task_Message,
  Conversation,
};
