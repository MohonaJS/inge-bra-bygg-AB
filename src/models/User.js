const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
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
        type: DataTypes.STRING,
        enum: ["admin", "employee", "client"],
        defaultValue: "client",
        allowNull: false,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  User.login = async (name, password) => {
    const user = await User.findOne({ where: { name: name } });
    if (!user) {
      console.log("error user model");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
      };

      return jwt.sign(payload, process.env.SECRET, { expiresIn: "2w" });
    } else {
      console.log("error user model down");
    }
  };

  User.beforeCreate(async (user, options) => {
    const bcrypt = require("bcrypt");
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  });

  return User;
};
