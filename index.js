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
app.listen(5000);
