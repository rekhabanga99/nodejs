const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const databaseName = "e-comm";
const collectionName = "products";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  db = result.db(databaseName);
  // console.log('db', db)
  return db.collection(collectionName);
}

module.exports = dbConnect;
