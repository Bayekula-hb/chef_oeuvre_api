const { province, sequelize } = require("../models");

const getAllProvince = async (req, res) => {
  res.send(await province.findAll());
};

module.exports = { getAllProvince };
