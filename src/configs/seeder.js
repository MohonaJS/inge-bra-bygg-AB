const db_config = require("./db_config");

const User = db_config.user;
const Task = db_config.task;

const seed = async () => {
  await User.create({
    // user_id: "mohona",
    name: "mohona",
    email: "mohona@admin.com",
    password: "1",
    role: "admin",
  });

  await User.create({
    // user_id: "nabhan",
    name: "nabhan",
    email: "nabhan@employee.com",
    password: "1",
    role: "employee",
  });

  await User.create({
    // user_id: "teja",
    name: "teja",
    email: "teja@client.com",
    password: "1",
    role: "client",
  });

  // await Task.create({
  //   // user_id: "teja",
  //   task_id: "house",
  //   employee_id: "nabhan",
  //   client_id: "teja",
  //   image: "house.png",
  //   status: false,
  // });
};
seed();
