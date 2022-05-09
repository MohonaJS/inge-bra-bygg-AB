module.exports = (sequelize, DataTypes) => {
  const Task_Message = sequelize.define(
    "task_message",
    {
      task_message_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      task_message_content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // task_id: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // user_id: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Task_Message;
};
