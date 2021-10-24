const express = require("express");
const { validatedParcelle } = require("../middlewares/parcelle/validatorNewParcelle.middleware");
const {
  getAllParcelle,
  addParcelle,
  getOneParcelle,
  updateParcelle,
} = require("../controllers/parcelles.controllers");
const { validatedGetOneParcelle } = require("../middlewares/parcelle/validatorGetParcelle.middleware");
const parcelleRouter = express.Router();

parcelleRouter.get("/",validatedGetOneParcelle, getOneParcelle)
parcelleRouter.get("/All", getAllParcelle);
parcelleRouter.post("/", validatedParcelle, addParcelle);
parcelleRouter.put("/",validatedGetOneParcelle,validatedParcelle,updateParcelle);

module.exports = parcelleRouter;
