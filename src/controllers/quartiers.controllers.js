const { quartier, avenue, sequelize } = require("../models");

const getOneQuartier = async (req, res) => {
  const { id_quartier } = req.query;
  res.send(
    await quartier.findOne({
      where: {
        id_quartier,
      },
      attributes: [
        "id_quartier",
        "nom_quartier",
        "superficie_quartier",
        "historique_quartier",
        "QuartierId",
      ],
    })
  );
};

const getAllQuartier = async (req, res) => {
  res.send(await quartier.findAll());
};

const addQuartier = async (req, res) => {
  const { nom_quartier, historique_quartier, superficie_quartier, districtId } =
    req.body;
  const newQuartier = await quartier.create({
    nom_quartier,
    historique_quartier,
    superficie_quartier,
    districtId,
  });
  res
    .status(200)
    .send(`La quartier de ${newQuartier.nom_quartier} ajoutée avec succès`);
};

const updateQuartier = async (req, res) => {
  const { id_quartier } = req.query;
  const { nom_quartier, historique_quartier, superficie_quartier, districtId } =
    req.body;
  const savedQuartier = await quartier.update(
    {
      nom_quartier,
      historique_quartier,
      superficie_quartier,
      districtId,
    },
    {
      where: {
        id_quartier,
      },
    }
  );
  if (savedQuartier === true) {
    res.status(200).json({ message: "update successfully completed" });
  } else {
    res.send({ message: "update completed fails" });
  }
};
const getQartierAndAvenue = async (req, res) => {
  const { id_quartier } = req.query;
  res.status(200).send(
    await quartier.findOne({
      where: {
        id_quartier,
      },
      attributes: [
        "id_quartier",
        "nom_quartier",
        "superficie_quartier",
        "historique_quartier",
      ],
      include: {
        model: avenue,
        attributes: ["id_avenue", "nom_avenue"],
      },
    })
  );
};
module.exports = {
  getAllQuartier,
  addQuartier,
  getOneQuartier,
  updateQuartier,
  getQartierAndAvenue,
};
