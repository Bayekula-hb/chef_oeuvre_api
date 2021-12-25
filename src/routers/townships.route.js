const express = require("express");
const {
  validatedCommune,
} = require("../middlewares/township/validatorNewTownship.middleware");
const {
  getAllTownship,
  addTownship,
  getOneTownship,
  updateTownship,
  getTownshipAndQuarter,
} = require("../controllers/townships.controllers");
const {
  validatedGetOneCommune,
} = require("../middlewares/township/validatorGetTownship.middleware");
const townshipRouter = express.Router();

townshipRouter.get("/", validatedGetOneCommune, getOneTownship);
townshipRouter.get("/All", getAllTownship);
townshipRouter.post("/", validatedCommune, addTownship);
townshipRouter.put("/", validatedGetOneCommune, validatedCommune, updateTownship);
townshipRouter.get("/details", validatedGetOneCommune, getTownshipAndQuarter);

module.exports = townshipRouter;
