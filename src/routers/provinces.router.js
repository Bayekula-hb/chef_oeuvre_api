const express = require("express");
const { validatedProvince } = require("../middlewares/province/validatorNewProvince.middleware");
const {
  getAllProvince,
  addProvince,
  getOneProvince,
  updateProvince,
} = require("../controllers/provinces.controllers");
const { validatedGetOneProvince } = require("../middlewares/province/validatorGetProvince.middleware");
const router = express.Router();

router.get("/",validatedGetOneProvince, getOneProvince)
router.get("/All", getAllProvince);
router.post("/", validatedProvince, addProvince);
router.put("/",validatedGetOneProvince,validatedProvince,updateProvince);

module.exports = router;
