const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  quantity: { type: Number, default: 1 },
  productDetails: {
    type: mongoose.Schema.ObjectId,
    ref: "ProductDetails",
    require: true,
  },
});

module.exports = mongoose.model("order", orderSchema);
