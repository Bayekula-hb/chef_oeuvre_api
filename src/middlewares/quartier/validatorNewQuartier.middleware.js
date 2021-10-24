const express = require("express");
const { body, check, validationResult } = require("express-validator");

const validatedQuartier = express();
const validationNewQuartier = [
  body("nom_quartier")
    .notEmpty()
    .withMessage("Cannot be empty")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long")
    .matches(/^[A-Za-z_-]{5,}$/)
    .withMessage("contain the number"),
  check("superficie_quartier")
    .isLength({ min: 2 })
    .withMessage("must be at least 2 chars")
    .matches(/^\d{2,}$/)
    .withMessage("contain the number"),
  check("historique_quartier")
    .notEmpty()
    .withMessage("cannot be empty")
    .isLength({ min: 10 })
    .withMessage("must be at least 10 chars")
    .matches(/^[A-Za-z]{2,}/)
    .withMessage("contain the chars not valid"),
  check("communeId")
    .notEmpty()
    .withMessage("cannot be empty")
    .isLength({ min: 1 })
    .withMessage("must be at least 1 chars")
    .matches(/^\d{1,}$/)
    .withMessage("contain the chars not valid"),
];

validatedQuartier.use(validationNewQuartier, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  next();
});

module.exports = { validatedQuartier };
