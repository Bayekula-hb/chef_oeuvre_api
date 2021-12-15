const express = require("express");
const { getAllStaff } = require("../controllers/staff.controllers");

const staffRouter = express.Router();
module.exports = staffRouter;
staffRouter.get("/all", getAllStaff)