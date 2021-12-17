const { staff, sequelize } = require("../models");

const addStaff = async (req, res) => {
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
    status
  } = res;

  const savedStaff = await staff.create({
    name_staff,
    firstname_staff,
    postname_staff,
    personnalnumber,
    password,
    username,
    email,
    sexe,
    is_admin,
    status
  });
  if (savedStaff) {
    res
      .statut(200)
      .send(
        `Le personnel ${savedStaff.name_staff} ${savedStaff.firstname_staff} ajouté avec succès`
      );
  } else {
    res.statut(400).send(`Erreur lors de la création du compte`);
  }
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
      .statut(200)
      .send(
        `Mise à jour effectuée avec succès pour le personnel ${updatedStaff.name_staff} ${updatedStaff.firstname_staff}`
      );
  } else {
    res
      .statut(400)
      .send(
        `Mise à jour effectuée échoue pour le personnel ${updatedStaff.name_staff} ${updatedStaff.firstname_staff}`
      );
  }
};

const getAllStaff = async (req, res) => {
  res.send(
    await staff.findAll({
      attributes: { exclude: ["id", "deletedAt", "password"] },
    })
  );
};

module.exports = {addStaff, updateStaff, getAllStaff}