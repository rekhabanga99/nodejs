const dbConnect = require("./mongodb");

const insertData = async () => {
  let db = await dbConnect();
  const dataToBeInserted = [
    {
      name: "Max 1",
      price: 7000,
      catergory: "phone",
      brand: "vivo",
    },
    {
      name: "Max 2",
      price: 2000,
      catergory: "phone",
      brand: "oppo",
    },
    {
      name: "Max 3",
      price: 3000,
      catergory: "phone",
      brand: "Redmi",
    },
    {
      name: "Max 4",
      price: 4000,
      catergory: "phone",
      brand: "Real me",
    },
  ];
  const result = await db.insertMany(dataToBeInserted);
  if (result.acknowledged) {
    console.log("Data inserted Succesfully");
  }
};
insertData();
