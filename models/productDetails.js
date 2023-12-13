const mongoose = require("mongoose");

const productDetailsSchema = new mongoose.Schema({
  category: { type: String },
  manufacturerName: { type: String },
});

const ProductDetails = mongoose.model("productDetails", productDetailsSchema);

module.exports = ProductDetails;
