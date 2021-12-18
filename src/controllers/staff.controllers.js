const { staff, sequelize } = require("../models");

const addStaff = async (req, res, next) => {
  const result = await sequelize.transaction(async (t) => {
    try {
      const {
        name_staff,
        firstname_staff,
        postname_staff,
        personnalnumber,
        password,
        username,
        email,
        is_admin,
        sexe,
        status,
      } = res;
      const alreadyExistsStaff = await staff.findOne({
        where: { email: res.email },
      });
      if (!alreadyExistsStaff) {
        const savedStaff = await staff.create({
          name_staff,
          firstname_staff,
          postname_staff,
          personnalnumber,
          password,
          username,
          email,
          is_admin,
          sexe,
          status,
        });
        if (savedStaff) {
          return res
            // .status(200)
            .send(
              `Staff ${savedStaff.name_staff} ${savedStaff.firstname_staff} added with success`
            );
        } else {
          return (
            res
              // .status(400)
              .send(`Account creation error`)
          );
        }
      } else {
        return res
        // .status(200)
        .json({
          erreur: "Request faid",
          message: "Staff with email already exists!",
        });
      }
    } catch (error) {
      res
        // .status(400)
        .json({ erreur: "Request faid", message: `${error} ${t}` });
    }
  });
};

const updateStaff = async (req, res) => {
  const { id_staff } = req.params;
  const {
    name_staff,
    firstname_staff,
    postname_staff,
    personnalnumber,
    password,
    username,
    email,
  } = req.body;
  const updatedStaff = await staff.update(
    {
      name_staff,
      firstname_staff,
      postname_staff,
      personnalnumber,
      password,
      username,
      email,
    },
    {
      where: {
        id_staff,
      },
    }
  );
  if (updatedStaff) {
    res
      .status(200)
      .send(
        `Mise à jour effectuée avec succès pour le personnel ${updatedStaff.name_staff} ${updatedStaff.firstname_staff}`
      );
  } else {
    res
      .status(400)
      .send(
        `Mise à jour effectuée échoue pour le personnel ${updatedStaff.name_staff} ${updatedStaff.firstname_staff}`
      );
  }
};

const getAllStaff = async (req, res) => {
  res.status(200).send(
    await staff.findAll({
      attributes: { exclude: ["id", "deletedAt", "password"] },
    })
  );
};

module.exports = { addStaff, updateStaff, getAllStaff };
