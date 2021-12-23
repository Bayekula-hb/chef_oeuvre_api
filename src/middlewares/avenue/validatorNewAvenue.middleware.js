const express = require("express");
const { body, check, validationResult } = require("express-validator");

const validatedAvenue = express();
const validationNewAvenue = [
  body("nom_avenue")
    .notEmpty()
    .withMessage("Cannot be empty")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long")
    .matches(/^[A-Za-z_-]{5,}$/)
    .withMessage("contain the number"),
  check("quartierId")
    .isLength({ min: 2 })
    .withMessage("must be at least 2 chars")
    .matches(/^\d{2,}$/)
    .withMessage("contain the number"),
];

validatedAvenue.use(validationNewAvenue, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  next();
});

module.exports = { validatedAvenue };
