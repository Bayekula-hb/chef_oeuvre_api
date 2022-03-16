const {
  parcel,
  historique_parcelle,
  proprietaire,
  avenue,
  owner,
  certificate_registration,
  sequelize,
} = require("../models");

const getOneParcelle = async (req, res) => {
  const { id_parcelle } = req.query;
  res.status(200).send(
    await parcel.findOne({
      where: {
        id_parcelle,
      },
      attributes: ["id_parcel", "ownerId", "avenueId", "number_parcel"],
      include: {
        model: avenue,
        attributes: ["id_avenue", "name_avenue"],
      },
    })
  );
};
const getAllParcelle = async (req, res) => {
  res.status(200).send(
    await parcel.findAll({
      attributes: [ "id_parcel", "ownerId", "avenueId", "number_parcel"],
      include: [
        {
          model: avenue,
          attributes: ["id_avenue", "name_avenue"],
        },
        {
          model: owner,
          attributes: [
            "id_owner",
            "name_owner",
            "postname_owner",
            "firstname_owner",
            "dateofbirth",
            "nationality",
          ],
        },
        // {
        //   model: certificate_registration,
        //   attributes: ["surface", "cadastral_number"],
        //   where : { parcel.id == certificate_registration.parcelleId},
        //   right: false,
        // },
      ],
    })
  );
};
const addParcelle = async (req, res) => {
  const { ownerId, avenueId, number_parcel } = req.body;
  const newParcel = await parcel.create({
    ownerId,
    avenueId,
    number_parcel,
  });
  res
    .status(200)
    .send(
      `La Parcelle ayant l'identifiant ${newParcel.id_parcel} ajoutée avec succès`
    );
};
const updateParcelle = async (req, res) => {
  const { id_parcelle } = req.query;
  const { proprietaireId, avenueId, numero } = req.body;
  const oldParcelle = findOne({
    where: {
      id_parcelle,
    },
  });
  await historique_parcelle.create({
    parcelleId: oldParcelle.id,
    proprietaireId: oldParcelle.proprietaireId,
    avenueId: oldParcelle.avenueId,
    numero: oldParcelle.numero,
  });
  const savedParcelle = await parcelle.update(
    {
      proprietaireId,
      avenueId,
      numero,
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
const getParcelleAndProprietaire = async (req, res) => {
  const { id_parcelle } = req.query;
  res.status(200).send(
    await parcelle.findOne({
      where: {
        id_parcelle,
      },
      attributes: ["id_parcelle", "proprietaireId", "avenueId", "numero"],
      include: {
        model: proprietaire,
        attributes: [
          "id_proprietaire",
          "nom_proprietaire",
          "postnom_proprietaire",
          "prenom_proprietaire",
          "date_naissance",
          "nationalite",
        ],
      },
    })
  );
};
const getArchiveParcelle = async (req, res) => {
  const { id_parcelle } = req.query;
  const parcelleId = await parcelle.findOne({
    where: {
      id_parcelle,
    },
    attributes: ["id"],
  });
  const info_now_parcelle = await parcelle.findOne({
    where: {
      id_parcelle,
    },
    attributes: ["id_parcelle", "proprietaireId", "avenueId", "numero"],
    include: {
      model: proprietaire,
      attributes: [
        "id_proprietaire",
        "nom_proprietaire",
        "postnom_proprietaire",
        "prenom_proprietaire",
        "date_naissance",
        "nationalite",
      ],
    },
  });
  const historyProprietaire = await historique_parcelle.findAll({
    where: {
      parcelleId: parcelleId.id,
    },
    include: {
      model: proprietaire,
      where: {
        id:proprietaireId,
      },
    },
  });
  res.status(200).send({ info_now_parcelle, historyProprietaire });
};
module.exports = {
  getAllParcelle,
  addParcelle,
  getOneParcelle,
  updateParcelle,
  getParcelleAndProprietaire,
  getArchiveParcelle,
};
