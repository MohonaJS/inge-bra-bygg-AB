const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  async user(req, res, next) {
    try {
      const token = req.header("Authorization").replace("Bearer ", "");
      const user = jwt.verify(token, process.env.SECRET);
      req.user = user;
      next();
    } catch (error) {
      res.status(401).send({ error: "Token is invalid" });
    }
  },

  async admin(req, res, next) {
    try {
      const token = req.header("Authorization").replace("Bearer ", "");
      const user = jwt.verify(token, process.env.SECRET);
      req.user = user;
      if (user.role != "admin") {
        res.status(401).send({ error: "not allowed" });
      }
      next();
    } catch (error) {
      res.status(401).send({ error: "Token is invalid" });
    }
  },
};
