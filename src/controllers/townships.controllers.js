const { township, district, quarter, sequelize } = require("../models");

const getOneTownship = async (req, res) => {
  const { id_township } = req.query;
  res.send(
    await township.findOne({
      where: {
        id_township,
      },
      attributes: [
        "id_township",
        "name_township",
        "surface_township",
        "history_township",
        "districtId",
      ],
      include: {
        model: district,
        attributes: ["id_district", "name_district", "surface_district"],
      },
    })
  );
};

const getAllTownship = async (req, res) => {
  res.send(
    await township.findAll({
      attributes: [
        "id_township",
        "name_township",
        "surface_township",
        "history_township",
        "districtId",
      ],
      include: {
        model: district,
        attributes: ["name_district", "surface_district"],
      },
    })
  );
};

const addTownship = async (req, res) => {
  const { name_township, history_township, surface_township, districtId } =
    req.body;
  const districtFound = await district.findOne({
    where: {
      id_district: districtId,
    },
  });
  if (districtFound) {
    const newtownship = await township.create({
      name_township,
      history_township,
      surface_township,
      districtId: districtFound.id,
    });
    res
      .status(200)
      .send(`La township de ${newtownship.name_township} ajoutée avec succès`);
  } else {
    res.status(400).send({ message: "Enregirstrement echouer" });
  }
};

const updateTownship = async (req, res) => {
  const { id_township } = req.query;
  const { name_township, history_township, surface_township, districtId } =
    req.body;
  const districtFound = await district.findOne({
    where: {
      id_district: districtId,
    },
  });
  if (districtFound) {
    const savedtownship = await township.update(
      {
        name_township,
        history_township,
        surface_township,
        districtId:districtFound.id,
      },
      {
        where: {
          id_township,
        },
      }
    );
    if (savedtownship) {
      res.status(200).json({ message: "update successfully completed" });
    } else {
      res.send({ message: "update completed fails" });
    }
  } else {
    res.status(400).send({ message: "District not found" });
  }
};

const getTownshipAndQuarter = async (req, res) => {
  const { id_township } = req.query;
  res.status(200).send(
    await township.findOne({
      where: {
        id_township,
      },
      attributes: [
        "id_township",
        "name_township",
        "surface_township",
        "history_township",
        "districtId",
      ],
      include: {
        model: quarter,
        attributes: [
          "id_quarter",
          "name_quarter",
          "history_quarter",
          "surface_quarter",
        ],
      },
    })
  );
};

module.exports = {
  getAllTownship,
  addTownship,
  getOneTownship,
  updateTownship,
  getTownshipAndQuarter,
};
