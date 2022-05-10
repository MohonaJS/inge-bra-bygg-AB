module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "task",
    {
      task_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      client_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      // employee_id: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },

      image: {
        type: DataTypes.STRING,
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
