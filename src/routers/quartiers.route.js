const express = require("express");
const {
  validatedQuartier,
} = require("../middlewares/quartier/validatorNewQuartier.middleware");
const {
  getAllQuartier,
  addQuartier,
 getOneQuartier,
  updateQuartier,
} = require("../controllers/quartiers.controllers");
const { validatedGetOneQuartier } = require("../middlewares/quartier/validatorGetQuartier.middleware");
const { getQartierAndAvenue } = require("../controllers/quartiers.controllers");
const quartierRouter = express.Router();

quartierRouter.get("/",validatedGetOneQuartier,getOneQuartier)
quartierRouter.get("/All", getAllQuartier);
quartierRouter.post("/", validatedQuartier, addQuartier);
quartierRouter.put("/",validatedGetOneQuartier,validatedQuartier,updateQuartier);
quartierRouter.get("/details",validatedGetOneQuartier,getQartierAndAvenue)

module.exports = quartierRouter;
