const express = require("express");
const multer = require("multer");
const app = express();
app.use(express.json());
require("./config");

const ProductModel = require("./productsSchema");


// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})
var upload = multer({ storage: storage })

app.post('/upload', upload.single('image'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
 
})

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

app.get("/search/:key", async (req, res) => {
  let result = await ProductModel.find({
    $or: [
      { name: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });
  console.log(result);

  res.send(result);
});

app.listen(5000);
