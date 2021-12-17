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
  body("password1")
    .notEmpty()
    .withMessage("Cannot be empty")
    .isLength({ min: 6 })
    .withMessage("must be at least 6 chars long"),
  body("personnalnumber")
    .isMobilePhone()
    .withMessage("Phone number not correct"),
  body("sexe").notEmpty().withMessage("Cannot be empty").trim().escape(),
  body("status")
    .notEmpty()
    .withMessage("Cannot be empty")
    .matches(/\w/)
    .withMessage("pas de chiffres")
    .trim()
    .escape(),
];

userRegisterMiddleware.use(validationMiddlewares, (req, res, next) => {
  let {
    name_staff,
    postname_staff,
    firstname_staff,
    username,
    sexe,
    personnalnumber,
    email,
    is_admin,
    password,
    password1,
    status,
  } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  if(password !== password1){
    return res.status(400).json({ message: "Les deux mots de passe ne sont pas identiques" });
  }
  const password_brut = password;

  res.password = bcrypt.hashSync(password, 10);
  res.email = email;
  res.name_staff= name_staff;
  res.postname_staff= postname_staff;
  res.firstname_staff= firstname_staff;
  res.is_admin = is_admin;
  res.sexe= sexe;
  res.status = status;
  res.username = username;
  res.personnalnumber = personnalnumber;
  next();
});

module.exports = userRegisterMiddleware;
