const express = require("express");
const { body, check, validationResult } = require("express-validator");

const validatedParcelle = express();
const validationNewParcelle = [
  body("avenueId")
    .notEmpty()
    .withMessage("Cannot be empty")
    .isLength({ min: 1 })
    .withMessage("must be at least 1 chars long")
    .matches(/^[A-Za-z_-]{1,}$/)
    .withMessage("contain the number"),
  check("number_parcel")
    .isLength({ min: 1 })
    .withMessage("must be at least 2 chars")
    .matches(/^\d{1,}$/)
    .withMessage("contain the number"),
    check("ownerId")
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
