const express = require("express");
const communeRouter = require("./routers/commune.route");
const provinceRouter = require("./routers/provinces.router");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Welcome to the app");
});
app.use("/provinces", provinceRouter);
app.use("/communes", communeRouter)

module.exports = app;
