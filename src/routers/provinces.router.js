const express = require('express');
const { getAllProvince } = require('../controllers/provinces.controllers');
const router = express.Router();

router.get("/",getAllProvince);
router.post("/",);
router.put("/",);

module.exports = router;