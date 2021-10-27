const { district, commune,sequelize } = require("../models");

const getOneDistrict = async (req, res) => {
  const { id_district } = req.query;
  res.send(
    await district.findOne({
      where: {
        id_district,
      },
      attributes: [
        "id_district",
        "nom_district",
        "superficie_district",
        "provinceId",
      ],
    })
  );
};

const getAllDistrict = async (req, res) => {
  res.send(await district.findAll());
};

const addDistrict = async (req, res) => {
  const { nom_district, superficie_district, provinceId } = req.body;
  const newDistrict = await district.create({
    nom_district,
    superficie_district,
    provinceId,
  });
  res
    .status(200)
    .send(`Le district de ${newDistrict.nom_district} ajouté avec succès`);
};

const updateDistrict = async (req, res) => {
  const { id_district } = req.query;
  const { nom_district, superficie_district, provinceId } = req.body;
  const savedDistrict = await district.update(
    {
      nom_district,
      superficie_district,
      provinceId,
    },
    {
      where: {
        id_district,
      },
    }
  );
  if (savedDistrict === true) {
    res.status(200).json({ message: "update successfully completed" });
  } else {
    res.send({ message: "update completed fails" });
  }
};
const getDistrictAndCommune = async (req, res)=>{
  const {id_district}=req.query;
  res.status(200).send(
    await district.findOne({
      where: {
        id_district
      },
      include:{
        model:"commune",
        attributes:[
          "id_commune",
          "historique_commune",
          "superficie_commune",
        ]
      }
    })
  )
} 

module.exports = {
  getAllDistrict,
  addDistrict,
  getOneDistrict,
  updateDistrict,
};
