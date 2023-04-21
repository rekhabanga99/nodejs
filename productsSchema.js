const mongoose = require("mongoose");
const collectionName = "products";

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  brand: String,
});

module.exports = mongoose.model(collectionName, ProductSchema);
