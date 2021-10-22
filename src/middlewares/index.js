const express = require("express");
const provinceMiddleware = require("./province");

const middleware = express();
middleware.use(provinceMiddleware)

module.exports = {middleware}