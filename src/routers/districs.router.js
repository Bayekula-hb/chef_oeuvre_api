const express = require("express");
const { validatedDistrict } = require("../middlewares/district/validatorNewDistrict.middleware");
const {
  getAllDistrict,
  addDistrict,
  getOneDistrict,
  updateDistrict,
} = require("../controllers/districts.controllers");
const { validatedGetOneDistrict } = require("../middlewares/district/validatorGetDistrict.middleware");
const districtRouter = express.Router();

districtRouter.get("/",validatedGetOneDistrict, getOneDistrict)
districtRouter.get("/All", getAllDistrict);
districtRouter.post("/", validatedDistrict, addDistrict);
districtRouter.put("/",validatedGetOneDistrict,validatedDistrict,updateDistrict);

module.exports = districtRouter;