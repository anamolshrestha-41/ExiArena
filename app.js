const express=require('express');
const app=express();
const MONGODB_URL= "mongodb://127.0.0.1:27017/exiarena";
const mongoose= require("mongoose")


main().then(()=>console.log("MongoDB Successfully Connected...")).catch(error=>console.log(error));
async function main(){
    await mongoose.connect(MONGODB_URL);
}

app.listen(8080, ()=>{
    console.log("Server is Running!!...")
})