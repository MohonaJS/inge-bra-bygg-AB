module.exports = (sequelize, DataTypes) => {
  const Task_Message = sequelize.define(
    "task_messages",
    {
      task_messages_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      task_messages_content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      task_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      worker_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Task_Message;
};
