const express = require("express");

const productRouter = express.Router();

const productController = require("../controllers/products")

productRouter.route("/")
    .get(productController.getDetails)

module.exports = productRouter;