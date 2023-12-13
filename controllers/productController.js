const Product = require("../models/productModel");
const ProductDetails = require("../models/productDetails");
exports.create = (req, res) => {
  const product = new Product();
  const productDetails = new ProductDetails();
  product.name = req.body.name;
  product.price = req.body.price;
  productDetails.category = req.body.productDetails.category;
  productDetails.manufacturerName = req.body.productDetails.manufacturerName;
  product.productDetails = productDetails._id;

  product
    .save()
    .then(() => res.status(201).json(product))
    .catch((err) => res.status(500).json(err));
};

// http://localhost:3000/api/products/5f6e7e1d5f4e2d3b3c1a2b1c
exports.readById = async (req, res) => {
  const prd = await Product.findById(req.params.id).catch((err) =>
    res.status(500).json(err)
  );

  if (!prd) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(prd);
};

exports.readAll = async (req, res) => {
  await Product.find()
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status(500).json(err));
};

exports.update = async (req, res) => {
  const product = Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  var newProduct;
  if (req.body.name || req.body.price) {
    newProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        price: req.body.price,
      },
      { new: true }
    );
  }
  // Updating Information in the ProductDetails Collection
  if (req.body.productDetails) {
    await ProductDetails.findByIdAndUpdate(product.productDetails, {
      category: req.body.productDetails.category
        ? req.body.productDetails.category
        : category,
      manufacturerName: req.body.productDetails.manufacturerName
        ? req.body.productDetails.manufacturerName
        : manufacturerName,
    });
  }
  res.json({ status: 200, data: newProduct });
};

exports.deleteById = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Delete Success"))
    .catch((err) => res.json(err));
};
