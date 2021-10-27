const { province, district, sequelize } = require("../models");

const getOneProvince = async (req, res) => {
  const { id_province } = req.query;
  res.send(
    await province.findOne({
      where: {
        id_province,
      },
      attributes: [
        "id_province",
        "nom_province",
        "superficie_province",
        "historique_province",
        "chef_lieux",
      ],
    })
  );
};
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
const updateProvince = async (req, res) => {
  const { id_province } = req.query;
  const { nom_province, historique_province, superficie_province, chef_lieux } =
    req.body;
  const savedProvince = await province.update(
    {
      nom_province,
      historique_province,
      superficie_province,
      chef_lieux,
    },
    {
      where: {
        id_province,
      },
    }
  );
  if (savedProvince === true) {
    res.status(200).json({ message: "update successfully completed" });
  } else {
    res.send({ message: "update completed fails" });
  }
};
const getProvinceAndDistrict = async (req, res) => {
  const { id_province } = req.query;
  res.send(
    await province.findOne({
      where: {
        id_province,
      },
      attributes: [
        "id_province",
        "nom_province",
        "superficie_province",
        "historique_province",
        "chef_lieux",
      ],
      include: {
        model: district,
        attributes: ["id_district", "nom_district", "superficie_district"],
      },
    })
  );
};
module.exports = {
  getAllProvince,
  addProvince,
  getOneProvince,
  updateProvince,
  getProvinceAndDistrict,
};
