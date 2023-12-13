const express = require('express');
const orderController = require('../controllers/orderController');

const ordersRouter = express.Router();

ordersRouter
  .route('/')
  .get(orderController.readAll)
  .post(orderController.create);

ordersRouter.route('/:id').get(orderController.readById);

module.exports = ordersRouter;
