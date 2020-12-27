//jshint esversion:6

const express = require("express"); // includes express module by declaring contant
const bodyParser = require("body-parser");
const ejs = require("ejs"); // include ejs module


const app = express();

app.set('view engine', 'ejs'); //enables you to use static template files in your application using ejs

app.use(bodyParser.urlencoded({extended: true})); //parsing the properties in the body
app.use(express.static("public")); //enables use of built-in middleware for serving static files


app.get("/", function(req, res){ //data server gets from home "/" page

  var today = new Date(); //declares date fucntion in JS
  var currentDay = today.getDay(); //today's date in number [0-6]
  var day = "";

  switch(currentDay){
    case 0:
      day="Sunday";
      break;
    case 1:
      day="Monday";
      break;
    case 2:
      day="Tuesday";
      break;
    case 3:
      day="Wednesday";
      break;
    case 4:
      day="Thursday";
      break;
    case 5:
      day="Friday";
      break;
    case 6:
      day="Saturday";
      break;
    default:
      console.log("Error: current day is equal to: " + currentDay);
    
  }

  res.render("list", {kindOfDay: day}); //links the list.ejs file to kindOfDay variable in the html file to show in the screen
    //replaces kindOfDay in the list.ejs file with day variable
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});

