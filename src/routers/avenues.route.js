const express = require("express");
const { validatedAvenue } = require("../middlewares/avenue/validatorNewAvenue.middleware");
const { getOneAvenue, getAllAvenue, addAvenue, updateAvenue } = require("../controllers/avenues.controllers");
const { validatedGetOneAvenue } = require("../middlewares/avenue/validatorGetAvenue.middleware");
const avenueRouter = express.Router();

avenueRouter.get("/",validatedGetOneAvenue,getOneAvenue)
avenueRouter.get("/All", getAllAvenue);
avenueRouter.post("/", validatedAvenue, addAvenue);
avenueRouter.put("/",validatedGetOneAvenue,validatedAvenue,updateAvenue);

module.exports = avenueRouter;
