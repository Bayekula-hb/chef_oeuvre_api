const express = require("express");
const { body, check, validationResult } = require("express-validator");

const validatedDistrict = express();
const validationNewDistrict = [
  body("nom_district")
    .notEmpty()
    .withMessage("Cannot be empty")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long")
    .matches(/^[A-Za-z_-]{5,}$/)
    .withMessage("contain the number"),
  check("superficie_district")
    .isLength({ min: 2 })
    .withMessage("must be at least 2 chars")
    .matches(/^\d{2,}$/)
    .withMessage("contain the number"),
  check("provinceId")
    .notEmpty()
    .withMessage("cannot be empty")
    .isLength({ min: 1 })
    .withMessage("must be at least 1 chars")
    .matches(/^\d{1,}$/)
    .withMessage("contain the chars not valid"),
];

validatedDistrict.use(validationNewDistrict, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  next();
});

module.exports = { validatedDistrict };
