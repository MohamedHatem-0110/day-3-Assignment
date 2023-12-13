const express = require("express");
const productController = require("../controllers/productController");

const productsRouter = express.Router();

productsRouter
  .route("/")
  .get(productController.readAll)
  .post(productController.create);

productsRouter
  .route("/:id")
  .get(productController.readById)
  .delete(productController.deleteById)
  .patch(productController.update)
  .put(productController.update);

module.exports = productsRouter;
