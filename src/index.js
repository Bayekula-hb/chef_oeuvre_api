const express = require("express");
const communeRouter = require("./routers/communes.route");
const districtRouter = require("./routers/districs.router");
const provinceRouter = require("./routers/provinces.router");
const quartierRouter = require("./routers/quartiers.route");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Welcome to the app");
});
app.use("/provinces", provinceRouter);
app.use("/districts", districtRouter)
app.use("/communes", communeRouter);
app.use("/quartiers", quartierRouter)

module.exports = app;
