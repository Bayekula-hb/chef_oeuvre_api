const express = require("express");
const { validatedProvince } = require("./validatorNewProvince.middleware");
const {validatedGetOneProvince}= require("./validatorGetProvince.middleware")

const provinceMiddleware = express();
provinceMiddleware.use(validatedProvince);
provinceMiddleware.use(validatedGetOneProvince);

module.exports = provinceMiddleware;
