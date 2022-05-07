const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

module.exports = (req, res, next) => {
  let token = req.headers["authorization"].replace("Bearer ", "");
  const user = jwt.verify(token, process.env.SECRET);
  req.user = user;
  jwt.verify(token, process.env.SECRET, (error, decoded) => {
    if (error) {
      res.status(401).json({
        status: "not OK",
        message: "Unauthorize",
      });
    } else {
      next();
    }
  });
};
