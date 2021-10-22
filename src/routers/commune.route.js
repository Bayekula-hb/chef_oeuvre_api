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
const communeRouter = express.Router();

communeRouter.get("/",validatedGetOneCommune,getOneCommune)
communeRouter.get("/All", getAllCommune);
communeRouter.post("/", validatedCommune, addCommune);
communeRouter.put("/",validatedGetOneCommune,validatedCommune,updateCommune);

module.exports = communeRouter;
