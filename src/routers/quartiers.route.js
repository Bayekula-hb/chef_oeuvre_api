const express = require("express");
const {
  validatedCommune,
} = require("../middlewares/commune/validatorNewCommune.middleware");
const {
  getAllCommune,
  addCommune,
 getOneCommune,
  updateCommune,
} = require("../controllers/communes.controllers");
const { validatedGetOneCommune } = require("../middlewares/commune/validatorGetcommune.middleware");
const quartierRouter = express.Router();

quartierRouter.get("/",validatedGetOneCommune,getOneCommune)
quartierRouter.get("/All", getAllCommune);
quartierRouter.post("/", validatedCommune, addCommune);
quartierRouter.put("/",validatedGetOneCommune,validatedCommune,updateCommune);

module.exports = quartierRouter;
