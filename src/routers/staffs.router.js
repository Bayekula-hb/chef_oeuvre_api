const express = require("express");
const {
  getAllStaff,
  addStaff,
  updateStaff,
  getOneStaff,
} = require("../controllers/staff.controllers");
const staffRegisterMiddleware = require("../middlewares/staff/staff.register.validation.middleware");
const getStaffMiddleware = require("../middlewares/staff/staff.get.middleware");

const staffRouter = express.Router();

staffRouter.get("/", getStaffMiddleware, getOneStaff);
staffRouter.get("/All", getAllStaff);
staffRouter.post("/", staffRegisterMiddleware, addStaff);
staffRouter.put("/", getStaffMiddleware, staffRegisterMiddleware, updateStaff);

module.exports = staffRouter;