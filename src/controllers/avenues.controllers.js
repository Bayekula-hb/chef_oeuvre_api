const { avenue, parcel, quarter, sequelize } = require("../models");

const getOneAvenue = async (req, res) => {
  const { id_avenue } = req.query;
  res.send(
    await avenue.findOne({
      where: {
        id_avenue,
      },
      attributes: ["id_avenue", "name_avenue", "quarterId"],
    })
  );
};

const getAllAvenue = async (req, res) => {
  res.send(await avenue.findAll());
};

const addAvenue = async (req, res) => {
  const { name_avenue, quarterId } = req.body;
  const quarterFound = await quarter.findOne({
    where: {
      id_quarter: quarterId,
    },
  });
  if (quarterFound) {
    const newAvenue = await avenue.create({
      name_avenue,
      quarterId,
    });
    res
      .status(200)
      .send(`L'avenue ${newAvenue.name_avenue} ajoutée avec succès`);
  } else {
    res.status(400).send(`Ce quartier n'existe pas`);
  }
};

const updateAvenue = async (req, res) => {
  const { id_avenue } = req.query;
  const { name_avenue, quarterId } = req.body;

  const quarterFound = await quarter.findOne({
    where: {
      id_quarter: quarterId,
    },
  });
  if (quarterFound) {
    const savedQuartier = await avenue.update(
      {
        name_avenue,
        quarterId,
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
  } else {
    res.status(400).send(`Ce quartier n'existe pas`);
  }
};
const getAvenueAndAllParcel = async (req, res) => {
  const { id_avenue } = req.query;
  const allParcelInAvenue = await avenue.findOne({
    where: {
      id_avenue,
    },
    attributes: ["name_avenue", "quarterId"],
    include: {
      model: parcel,
      attributes: [
        "id_parcel",
        "number_parcel",
        [sequelize.fn("COUNT", sequelize.col("id_parcel")), "number_parcel"],
      ],
    },
  });
  res.status(200).send(allParcelInAvenue);
};

module.exports = {
  getAllAvenue,
  addAvenue,
  getOneAvenue,
  updateAvenue,
  getAvenueAndAllParcel,
};
