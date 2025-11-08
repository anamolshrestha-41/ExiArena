const express=require('express');
const app=express();
const MONGODB_URL= "mongodb://127.0.0.1:27017/exiarena";
const mongoose= require("mongoose")
const ejsMate= require("ejs-mate");
const path= require("path")
const Poll= require("./models/poll.js")

main().then(()=>console.log("MongoDB Successfully Connected...")).catch(error=>console.log(error));
async function main(){
    await mongoose.connect(MONGODB_URL);
}
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.engine("ejs", ejsMate);


// Routes
app.get("/", (req, res) => {
  res.send("Running..");
});

//all posts
app.get("/polls", async(req, res)=>{
   let polls = await Poll.find({});
   res.render("polls/index.ejs", {polls});
});
//create a new poll


app.listen(8080, ()=>{
    console.log("Server is Running!!...")
})