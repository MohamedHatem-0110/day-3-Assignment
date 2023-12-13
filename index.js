const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const orderRouter = require("./routes/orderRouter");
const productRouter = require("./routes/productRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb+srv://omar:omar@demo-cluster.v2v5yaf.mongodb.net/my-store")
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
  });

app.use("/api/orders", orderRouter);
app.use("/api/products", productRouter);

app.get("/", (_, res) => {
  res.send("API Working well");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
