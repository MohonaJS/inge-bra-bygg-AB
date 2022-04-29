const app = require("../app");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

app.listen(process.env.RUNNING_PORT, () => {
  console.log(`server runs successfully at port ${process.env.RUNNING_PORT}`);
});
