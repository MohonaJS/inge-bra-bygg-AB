const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

module.exports = (req, res, next) => {
  let token = req.headers["authorization"].replace("Bearer ", "");
  jwt.verify(token, process.env.SECRET, (error, decoded) => {
    if (error) {
      res.status(401).json({
        status: "not OK",
        message: "Unauthorize",
      });
    } else {
      if (decoded.role === "admin") {
        next();
      } else {
        res.status(401).json({
          status: "not OK",
          message: "Unauthorize",
        });
      }
    }
  });
};
