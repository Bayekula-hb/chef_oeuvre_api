const express = require("express");
const avenueRouter = require("./routers/avenues.route");
const townshipRouter = require("./routers/townships.route");
const districtRouter = require("./routers/districs.router");
const parcelleRouter = require("./routers/parcelles.router");
const proprietaireRouter = require("./routers/proprietaires.router");
const provinceRouter = require("./routers/provinces.router");
const quarterRouter = require("./routers/quarters.route");
const staffRouter = require("./routers/staffs.router");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Welcome to the app");
});
app.use("/api_lopango/provinces", provinceRouter);
app.use("/api_lopango/districts", districtRouter);
app.use("/api_lopango/townships", townshipRouter);
app.use("/api_lopango/quarters", quarterRouter);
app.use("/api_lopango/avenues", avenueRouter);
app.use("/api_lopango/parcels", parcelleRouter);
app.use("/api_lopango/owners", proprietaireRouter);
app.use("/api_lopango/staffs", staffRouter);

module.exports = app;
