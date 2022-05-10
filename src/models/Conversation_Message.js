module.exports = (sequelize, DataTypes) => {
  const Conversation_Message = sequelize.define(
    "conversation_message",
    {
      content: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM("TEXT", "image"),
        allowNull: false,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Conversation_Message;
};
