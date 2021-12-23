const express = require("express");
const { body, check, validationResult } = require("express-validator");

const validatedParcelle = express();
const validationNewParcelle = [
  body("nom_parcelle")
    .notEmpty()
    .withMessage("Cannot be empty")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long")
    .matches(/^[A-Za-z_-]{5,}$/)
    .withMessage("contain the number"),
  check("avenueId")
    .isLength({ min: 2 })
    .withMessage("must be at least 2 chars")
    .matches(/^\d{2,}$/)
    .withMessage("contain the number"),
    check("proprietaireId")
      .isLength({ min: 2 })
      .withMessage("must be at least 2 chars")
      .matches(/^\d{2,}$/)
      .withMessage("contain the number"),
];

validatedParcelle.use(validationNewParcelle, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  next();
});

module.exports = { validatedParcelle };
