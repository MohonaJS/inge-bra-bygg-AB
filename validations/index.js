const {
  check,
  body,
  validationResult,
  query,
  header,
} = require("express-validator");

const validator = (validators) => async (req, res, next) => {
  for (let validering of validators) {
    const result = await validering.run(req);
    if (result.errors.length) break;
  }
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  res.status(400).json({ errors: errors.array() });
};

module.exports = {
  login: validator([
    check("name").exists().withMessage("Missing name"),
    check("email").exists().withMessage("Missing email"),
    check("password").exists().withMessage("Missing password"),
    check("role").exists().withMessage("Missing role"),
  ]),

  createUser: validator([
    check("name").exists().withMessage("Name missing"),
    check("email").exists().withMessage("Email missing"),
    check("password").exists().withMessage("Password missing"),
    check("role").exists().withMessage("Role missing"),
  ]),

  create_task: validator([
    check("title").exists().withMessage("Title missing"),
    check("desc").exists().withMessage("Description missing"),
  ]),
};
