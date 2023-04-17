const dbConnect = require("./mongodb");

const findData = async () => {
  let result = await dbConnect();
  result = await result.find({}).toArray();
  if (result.length) {
    console.log("Data fetched Succesfully", result);
  }else{
    console.log("No data avaiilable ", result);

  }

  return result;
};
findData();
