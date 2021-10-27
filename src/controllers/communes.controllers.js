const { commune, quartier,sequelize } = require("../models");

const getOneCommune = async (req, res) => {
  const { id_commune } = req.query;
  res.send(
    await commune.findOne({
      where: {
        id_commune,
      },
      attributes: [
        "id_commune",
        "nom_commune",
        "superficie_commune",
        "historique_commune",
        "districtId",
      ],
    })
  );
};

const getAllCommune = async (req, res) => {
  res.send(await commune.findAll());
};

const addCommune = async (req, res) => {
  const { nom_commune, historique_commune, superficie_commune, districtId } =
    req.body;
  const newCommune = await commune.create({
    nom_commune,
    historique_commune,
    superficie_commune,
    districtId,
  });
  res
    .status(200)
    .send(`La Commune de ${newCommune.nom_commune} ajoutée avec succès`);
};

const updateCommune = async (req, res) => {
  const { id_commune } = req.query;
  const { nom_commune, historique_commune, superficie_commune, districtId } =
    req.body;
  const savedCommune = await commune.update(
    {
      nom_commune,
      historique_commune,
      superficie_commune,
      districtId,
    },
    {
      where: {
        id_commune,
      },
    }
  );
  if (savedCommune === true) {
    res.status(200).json({ message: "update successfully completed" });
  } else {
    res.send({ message: "update completed fails" });
  }
};

const getCommuneAndQuartier = async(req,res)=>{
  const {id_commune}=req.query;
  res.status(200).send(
    await commune.findOne({
      where:{
        id_commune,
      },
      attributes: [
        "id_commune",
        "nom_commune",
        "superficie_commune",
        "historique_commune",
        "districtId",
      ],
      include :{
        model : quartier,
        attributes:[
          "id_quartier",
          "nom_quartier",
          "historique_quartier",
          "superficie_quartier",
        ]
      }
    })
  )
}

module.exports = {
  getAllCommune,
  addCommune,
  getOneCommune,
  updateCommune,
  getCommuneAndQuartier
};
