const { parcelle, historique_parcelle,sequelize } = require("../models");

const getOneParcelle = async (req, res) => {
  const { id_parcelle } = req.query;
  res.send(
    await parcelle.findOne({
      where: {
        id_parcelle,
      },
      attributes: [
        "id_parcelle",
        "proprietaireId",
        "avenueId",
        "numero",
      ],
    })
  );
};
const getAllParcelle = async (req, res) => {
  res.send(await parcelle.findAll());
};
const addParcelle = async (req, res) => {
  const { proprietaireId, avenueId, numero} =
    req.body;
  const newParcelle = await parcelle.create({
    proprietaireId, avenueId, numero,
  });
  res
    .status(200)
    .send(`La Parcelle ayant l'identifiant ${newParcell.id_parcelle} ajoutée avec succès`);
};
const updateParcelle = async (req, res) => {
  const { id_parcelle } = req.query;
  const { proprietaireId, avenueId, numero} =
    req.body;
  const oldParcelle = findOne({
    where:{
      id_parcelle
    }
  })
  await historique_parcelle.create({
    parcelleId:oldParcelle.id,
    proprietaireId:oldParcelle.proprietaireId,
    avenueId:oldParcelle.avenueId,
    numero:oldParcelle.numero,
  })
  const savedParcelle = await parcelle.update(
    {
      proprietaireId, avenueId, numero
    },
    {
      where: {
        id_parcelle,
      },
    }
  );
  if (savedParcelle === true) {
    res.status(200).json({ message: "update successfully completed" });
  } else {
    res.send({ message: "update completed fails" });
  }
};
module.exports = {
  getAllParcelle,
  addParcelle,
  getOneParcelle,
  updateParcelle,
};
