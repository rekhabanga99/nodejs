const express = require("express");
const dbConnect = require("./mongodb");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const db = await dbConnect();
  const data = await db.find().toArray();
  res.send(data);
  console.log(data);
});

app.post("/", async (req, res) => {
  const dataToBeInserted = req.body;
  let db = await dbConnect();
  const result = await db.insertOne(dataToBeInserted);
  if (result.acknowledged) {
    console.log("Data inserted Succesfully");
  }

  res.send(dataToBeInserted);
});

app.put("/", async (req, res) => {
  const name = req.query;
  console.log("name", name);
  let db = await dbConnect();
  const result = await db.updateOne({ name: name }, { $set: req.body });
  if (result.acknowledged) {
    console.log("Data updated Succesfully");
    res.send({ result: "Data updted Succesfully" });
  }
});
app.listen(5000);
