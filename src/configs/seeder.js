const db_config = require("./db_config");

const User = db_config.user;

const seed = async () => {
  await User.create({
    user_id: "mohona",
    email: "mohona",
    name: "mohona@admin.com",
    password: "mohona",
    role: "admin",
  });

  await User.create({
    user_id: "nabhan",
    email: "nabhan",
    name: "nabhan@admin.com",
    password: "nabhan",
    role: "worker",
  });

  await User.create({
    user_id: "teja",
    email: "teja",
    name: "teja@admin.com",
    password: "teja",
    role: "client",
  });
};
seed();