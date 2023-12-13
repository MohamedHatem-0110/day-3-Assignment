const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  review: { type: String },
  productDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductDetails",
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
