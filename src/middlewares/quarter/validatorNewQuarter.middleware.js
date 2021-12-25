const express = require("express");
const { body, check, validationResult } = require("express-validator");

const validatedQuarter = express();
const validationNewQuarter = [
  body("name_quarter")
    .notEmpty()
    .withMessage("Cannot be empty")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long")
    .matches(/^[A-Za-z_-]{5,}$/)
    .withMessage("contain the number"),
  check("history_quarter")
    .isLength({ min: 10 })
    .withMessage("must be at least 2 chars")
    .matches(/^[A-Za-z]{2,}/)
    .withMessage("contain the number"),
  check("surface_quarter")
    .notEmpty()
    .withMessage("cannot be empty")
    .isLength({ min: 3 })
    .withMessage("must be at least 2 chars")
    .matches(/^\d{3,}/)
    .withMessage("contain the chars not valid"),
  check("townshipId")
    .notEmpty()
    .withMessage("cannot be empty")
    .isLength({ min: 8 })
    .withMessage("must be at least 1 chars"),
    // .matches(/^\d{1,}$/)
    // .withMessage("contain the chars not valid"),
];

validatedQuarter.use(validationNewQuarter, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  next();
});

module.exports = { validatedQuarter };
