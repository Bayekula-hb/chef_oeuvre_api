const express = require("express");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");

const userRegisterMiddleware = express();

const validationMiddlewares = [
  body("email").notEmpty().withMessage("Cannot be empty").isEmail(),
  body("name_staff")
    .notEmpty()
    .withMessage("Cannot be empty")
    .isLength({ min: 3 })
    .withMessage("must be at least 3 chars long")
    .trim()
    .escape(),
  body("firstname_staff")
    .notEmpty()
    .withMessage("Cannot be empty")
    .isLength({ min: 3 })
    .withMessage("must be at least 3 chars long")
    .trim()
    .escape(),
  body("postname_staff")
    .isLength({ min: 3 })
    .withMessage("must be at least 3 chars long")
    .trim()
    .escape(),
  body("username")
    .isLength({ min: 3 })
    .withMessage("must be at least 3 chars long")
    .trim()
    .escape(),
  body("password")
    .notEmpty()
    .withMessage("Cannot be empty")
    .isLength({ min: 6 })
    .withMessage("must be at least 6 chars long"),
  body("personnalnumber")
    .isMobilePhone()
    .withMessage("Phone number not correct"),
  body("sexe").notEmpty().withMessage("Cannot be empty").trim().escape(),
  body("statut")
    .notEmpty()
    .withMessage("Cannot be empty")
    .matches(/\w/)
    .withMessage("pas de chiffres")
    .trim()
    .escape(),
];

userRegisterMiddleware.use(validationMiddlewares, (req, res, next) => {
  let {
    nom_user,
    postnom_user,
    prenom_user,
    sexe_user,
    email,
    is_admin,
    password,
    statut,
  } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const password_brut = password;

  res.password = bcrypt.hashSync(password, 10);
  res.email = email;
  res.nom_user = nom_user;
  res.postnom_user = postnom_user;
  res.prenom_user = prenom_user;
  res.is_admin = is_admin;
  res.sexe_user = sexe_user;
  res.statut = statut;
  res.password_brut = password_brut;
  next();
});

module.exports = userRegisterMiddleware;
