const dbConnect = require("./mongodb");

const updateData = async () => {
  let db = await dbConnect();

  const result = await db.updateOne(
    { name: "Max 1" },
    {
      $set: {
        catergory: "Tablet",
        price: 19000000,
      },
    }
  );
  if (result.acknowledged) {
    console.log("Data updated Succesfully", result);
  }
};
updateData();
