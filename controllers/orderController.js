const Order = require("../models/orderModel");

exports.create = async (req, res) => {
  const order = new Order();

  order.product = req.body.product;
  order.quantity = req.body.quantity;

  order
    .save()
    .then(() => res.status(201).json(order))
    .catch((err) => res.status(500).json(err));
};

exports.readAll = (req, res) => {
  Order.find()
    .populate("product")
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(500).json(err));
};

// http://localhost:3000/api/orders/5f6e7e1d5f4e2d3b3c1a2b1c
exports.readById = (req, res) => {
  Order.findById(req.params.id)
    .populate("product")
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(500).json(err));
};

// http://localhost:3000/api/orders/5f6e7e1d5f4e2d3b3c1a2b1c
exports.deleteById = async (req, res) => {
  await Order.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ message: "Order deleted" }))
    .catch((err) => res.status(500).json(err));
};
