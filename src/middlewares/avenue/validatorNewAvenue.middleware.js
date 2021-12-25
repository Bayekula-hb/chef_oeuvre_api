const express = require("express");
const { body, validationResult } = require("express-validator");

const validatedAvenue = express();
const validationNewAvenue = [
  body("name_avenue")
    .notEmpty()
    .withMessage("Cannot be empty")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long")
    .matches(/^[A-Za-z_-]{4,}/)
    .withMessage("contain the number"),
  body("quarterId")
    .isLength({ min: 4 })
    .withMessage("must be at least 4 chars")
    .matches(/\w{4,}/)
    .withMessage("contain not the chars"),
];

validatedAvenue.use(validationNewAvenue, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  next();
});

module.exports = { validatedAvenue };
