const dbConnect = require("./mongodb");

const deletData = async () => {
  let db = await dbConnect();

  const result = await db.deleteOne(
    { name: "Max 4" }
  );
  if (result.acknowledged) {
    console.log("Data deleted Succesfully", result);
  }
};
deletData();
