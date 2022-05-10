const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.db",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

let db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/User")(sequelize, DataTypes);
db.task = require("../models/Task")(sequelize, DataTypes);
db.task_message = require("../models/Task_message")(sequelize, DataTypes);
db.conversation = require("../models/Conversation")(sequelize, DataTypes);
db.conversation_message = require("../models/Conversation_Message")(
  sequelize,
  DataTypes
);

db.sequelize.sync({ force: false });

module.exports = db;
