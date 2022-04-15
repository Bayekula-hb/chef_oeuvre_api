const express = require("express");
const { param, check, validationResult } = require("express-validator");

const validatedQuarterByProvince = express();
const validationProvinceId = [
  check("provinceId")
  .notEmpty()
  .withMessage("cannot be empty")
  .isLength({ min: 1 })
  .withMessage("must be at least 1 chars")
  .matches(/^\d{1,}$/)
  .withMessage("contain the chars not valid")
  .trim()
  .escape(),
];

validatedQuarterByProvince.use(validationProvinceId, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  next();
});

module.exports = { validatedQuarterByProvince };
