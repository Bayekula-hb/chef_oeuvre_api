const express = require("express");
const router = require("./routers/provinces.router");

const app = express();

app.use(express.json());

app.get("/", async (req, res)=>{
    res.send("Welcome to the app")
})
app.use("/provinces",router)

module.exports = app;