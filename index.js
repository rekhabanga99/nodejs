const express = require("express");
const app = express();

app.use(express.json());
require("./config");

const ProductModel = require("./productsSchema");

app.post("/", async (req, res) => {
  const payload = req.body;
  let data = new ProductModel(payload);
  const result = await data.save();
  res.send(result);
});

app.put("/update/:_id", async (req, res) => {
  console.log(req.params, "=====params========");
  console.log(req.body, "======body=======");

  let result = await ProductModel.updateOne(req.params, { $set: req.body });
  res.send(result);
});

app.delete("/delete/:_id", async (req, res) => {
  const payload = req.params;
  let result = await ProductModel.deleteOne(payload);
  res.send(result);
});

app.get("/", async (req, res) => {
  let result = await ProductModel.find({});
  res.send(result);
});

app.listen(5000);
