const express = require('express');
const {validatedProvince}=require("../middlewares/province.middleware")
const { getAllProvince, addProvince } = require('../controllers/provinces.controllers');
const router = express.Router();

router.get("/",getAllProvince);
router.post("/",validatedProvince,addProvince);
router.put("/",);

module.exports = router;