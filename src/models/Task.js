module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "task",
    {
      task_id: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
      },
      employee_id: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
      },
      client_id: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Task;
};
