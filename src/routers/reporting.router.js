const express = require("express");
const {
  certificateCountByMounth
} = require("../controllers/reporting.controllers");

const reportingRouter = express.Router();

reportingRouter.get("/reportingCertificate", certificateCountByMounth);

module.exports = reportingRouter;