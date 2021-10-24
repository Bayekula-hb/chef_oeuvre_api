const { avenue, sequelize } = require("../models");

const getOneAvenue = async (req, res) => {
  const { id_avenue } = req.query;
  res.send(
    await avenue.findOne({
      where: {
        id_avenue,
      },
      attributes: [
        "id_avenue",
        "nom_avenue",
        "QuartierId",
      ],
    })
  );
};

const getAllAvenue = async (req, res) => {
  res.send(await avenue.findAll());
};

const addAvenue = async (req, res) => {
  const { nom_avenue, quartierId } =
    req.body;
  const newAvenue = await avenue.create({
    nom_avenue,
    quartierId,
  });
  res
    .status(200)
    .send(`La quartier de ${newAvenue.nom_avenue} ajoutée avec succès`);
};

const updateAvenue = async (req, res) => {
  const { id_avenue } = req.query;
  const { nom_avenue, quartierId } =
    req.body;
  const savedQuartier = await avenue.update(
    {
      nom_avenue,
      quartierId,
    },
    {
      where: {
        id_avenue,
      },
    }
  );
  if (savedQuartier === true) {
    res.status(200).json({ message: "update successfully completed" });
  } else {
    res.send({ message: "update completed fails" });
  }
};

module.exports = {
  getAllAvenue,
  addAvenue,
  getOneAvenue,
  updateAvenue,
};
