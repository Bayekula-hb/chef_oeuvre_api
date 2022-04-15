const { quarter, avenue, township, sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

const getOneQuarter = async (req, res) => {
  const { id_quarter } = req.query;
  res.send(
    await quarter.findOne({
      where: {
        id_quarter,
      },
      attributes: [
        "id_quarter",
        "name_quarter",
        "surface_quarter",
        "history_quarter",
      ],
    })
  );
};
const getQuarterByProvince = async (req, res) => {
  const { provinceId } = req.query;
  res.send(
    await quarter.findOne({
      where: {
        provinceId,
      },
      attributes: [
        "id_quarter",
        "name_quarter",
        "surface_quarter",
        "history_quarter",
      ],
    })
  );
};
const getAllQuarter = async (req, res) => {
  res.send(await quarter.findAll());
};

const addQuarter = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { name_quarter, history_quarter, surface_quarter, townshipId } =
      req.body;
    const townshipFound = await township.findOne({
      where: {
        id: townshipId,
      },
    });
    if (townshipFound) {
      const savedQuarter = await quarter.create(
        {
          name_quarter,
          history_quarter,
          surface_quarter,
          townshipId: townshipFound.id,
        },
        {
          transaction: t,
        }
      );
      if (savedQuarter) {
        await t.commit();
        res.status(200).json({ message: "Enregistrement effectué avec succès" });
      } else {
        await t.rollback();
        res.send({ message: "add completed fails" });
      }
    } else {
      await t.rollback();
      res.status(400).send({ message: "La commune spécifier n'existe pas" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateQuarter = async (req, res) => {
  const { id_quarter } = req.query;
  const { name_quarter, history_quarter, surface_quarter, townshipId } =
    req.body;
  const townshipFound = await quarter.findOne({
    where: {
      id_township: townshipId,
    },
  });
  if (townshipFound) {
    const savedQuarter = await quarter.update(
      {
        name_quarter,
        history_quarter,
        surface_quarter,
        townshipId: townshipFound.id,
      },
      {
        where: {
          id_quarter,
        },
      }
    );
    if (savedQuarter) {
      res.status(200).json({ message: "update successfully completed" });
    } else {
      res.send({ message: "update completed fails" });
    }
  } else {
    res.status(400).send({ message: "La commune spécifier n'existe pas" });
  }
};
const getQuarterAndAvenue = async (req, res) => {
  const { id_quarter } = req.query;
  res.status(200).send(
    await quarter.findOne({
      where: {
        id_quarter,
      },
      attributes: [
        "id_quarter",
        "name_quarter",
        "surface_quarter",
        "history_quarter",
      ],
      include: {
        model: avenue,
        attributes: ["id_avenue", "name_avenue"],
      },
    })
  );
};
module.exports = {
  getAllQuarter,
  addQuarter,
  getOneQuarter,
  updateQuarter,
  getQuarterAndAvenue,
  getQuarterByProvince,
};
