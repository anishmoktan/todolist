//jshint esversion:6

const express = require("express"); // includes express module by declaring contant
const bodyParser = require("body-parser");
const ejs = require("ejs"); // include ejs module


const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set('view engine', 'ejs'); //enables you to use static template files in your application using ejs

app.use(bodyParser.urlencoded({extended: true})); //using it to be able to read the incoming json from frontend
app.use(express.static("public")); //enables use of built-in middleware for serving files in puclic folder on the internet (css files)


app.get("/", function(req, res){ //data server gets from home "/" page

  let today = new Date(); //declares date fucntion in JS

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleString("en-US",options);

  res.render("list", {listTitle: day, newListItems: items}); //links the list.ejs file to kindOfDay variable in the html file to show in the screen
    //replaces kindOfDay in the list.ejs file with day variable
});

app.post("/",function(req,res){
  let item = req.body.newItem;

  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});

app.get("/work", function(req,res){
  
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});
