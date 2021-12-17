const express = require("express");
const { getAllStaff, addStaff } = require("../controllers/staff.controllers");
const userRegisterMiddleware = require("../middlewares/staff/staff.register.validation.middleware");

const staffRouter = express.Router();
module.exports = staffRouter;
staffRouter.get("/all", getAllStaff);
staffRouter.post("/", userRegisterMiddleware, addStaff);