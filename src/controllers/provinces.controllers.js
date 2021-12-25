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
        "name_province",
        "surface_province",
        "history_province",
        "chieftown",
        "image_province",
      ],
    })
  );
};
const getAllProvince = async (req, res) => {
  res.send(
    await province.findAll({
      attributes: [
        "id_province",
        "name_province",
        "surface_province",
        "history_province",
        "chieftown",
        "image_province",
      ],
    })
  );
};
const addProvince = async (req, res) => {
  const {
    name_province,
    history_province,
    surface_province,
    chieftown,
    image_province,
  } = req.body;
  const newProvince = await province.create({
    name_province,
    history_province,
    surface_province,
    chieftown,
    image_province,
  });

  res
    .status(200)
    .send(`La province de ${newProvince.name_province} ajoutée avec succès`);
};
const updateProvince = async (req, res) => {
  const { id_province } = req.query;
  const {
    name_province,
    history_province,
    surface_province,
    chieftown,
    image_province,
  } = req.body;
  const savedProvince = await province.update(
    {
      name_province,
      history_province,
      surface_province,
      chieftown,
      image_province,
    },
    {
      where: {
        id_province,
      },
    }
  );
  if (savedProvince) {
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
        "name_province",
        "surface_province",
        "history_province",
        "chieftown",
        "image_province",
      ],
      include: {
        model: district,
        attributes: [
          "id_district",
          "name_district",
          "surface_district",
          // [sequelize.fn('COUNT', sequelize.col('name_district')), 'number_district']
        ],
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
