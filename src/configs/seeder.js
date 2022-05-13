const User = require("../models/User");

(async () => {
  await User.create({
    name: "mohona",
    email: "mohona@admin.com",
    password: "1",
    role: "admin",
  });

  await User.create({
    name: "nabhan",
    email: "nabhan@employee.com",
    password: "1",
    role: "employee",
  });

  await User.create({
    name: "kalle",
    email: "kalle@client.com",
    password: "1",
    role: "client",
  });
})();
