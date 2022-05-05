module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      // user_id: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   unique: true,
      // },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("admin", "employee", "client"),
        // allowNull: false,
        // defaultValue: "admin",
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  User.beforeCreate(async (user, options) => {
    const bcrypt = require("bcrypt");
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  });

  return User;
};
