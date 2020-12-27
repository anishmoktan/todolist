//jshint esversion:6

const express = require("express"); // includes express module by declaring contant
const bodyParser = require("body-parser");
const ejs = require("ejs"); // include ejs module


const app = express();

app.set('view engine', 'ejs'); //enables you to use static template files in your application using ejs

app.use(bodyParser.urlencoded({extended: true})); //using it to be able to read the incoming json from frontend
app.use(express.static("public")); //enables use of built-in middleware for serving static files


app.get("/", function(req, res){ //data server gets from home "/" page

  var today = new Date(); //declares date fucntion in JS

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleString("en-US",options);

  res.render("list", {kindOfDay: day}); //links the list.ejs file to kindOfDay variable in the html file to show in the screen
    //replaces kindOfDay in the list.ejs file with day variable
});

app.post("/",function(req,res){
  var item = req.body.newItem;
  console.log(item);
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});

