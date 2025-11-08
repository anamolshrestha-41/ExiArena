const mongoose= require("mongoose");
const initData=require("./data.js");
const Poll= require("../models/poll.js");
const MONGODB_URL= "mongodb://127.0.0.1:27017/exiarena";

main().then(()=>console.log("MongoDB Successfully Connected...")).catch(error=>console.log(error));
async function main(){
    await mongoose.connect(MONGODB_URL);
}

const initDB= async()=>{
  try {
    await Poll.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj}));
    await Poll.insertMany(initData.data);
    console.log("data was initialized...");
  } catch (error) {
    console.error("Error initializing database:", error);
    process.exit(1);
  }
}

initDB();