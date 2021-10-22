const { province, sequelize } = require("../models");

const getAllProvince = async (req, res) => {
  res.send(await province.findAll());
};
const addProvince = async (req, res) => {
  const { nom_province, historique_province, superficie_province, chef_lieux } =
    req.body;
  const newProvince = await province.create({
    nom_province,
    historique_province,
    superficie_province,
    chef_lieux,
  });
  res
    .status(200)
    .send(`La province de ${newProvince.nom_province} ajoutée avec succès`);
};
module.exports = { getAllProvince, addProvince };
