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
    check("name").exists().withMessage("enter your name"),
    check("email").exists().withMessage("enter your email"),
    check("password").exists().withMessage("enter your password"),
    check("role").exists().withMessage("enter your role"),
  ]),

  create_user: validator([
    check("name").exists().withMessage("enter your name"),
    check("email").exists().withMessage("enter your email"),
    check("password").exists().withMessage("enter your password"),
    check("role").exists().withMessage("enter your role"),
  ]),

  create_task: validator([
    check("title").exists().withMessage("enter your title"),
    check("desc").exists().withMessage("enter your desc"),
  ]),
};
