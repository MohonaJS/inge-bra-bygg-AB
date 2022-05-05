module.exports = (sequelize, DataTypes) => {
  const Conversation = sequelize.define(
    "conversation",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Conversation;
};
