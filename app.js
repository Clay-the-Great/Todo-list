//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", function(req, res) {
  let day = date.getDate();

  // let currentDay = today.getDay();

  res.render("list", {
    listTitle: day,
    newListItems: items,
  });

});

app.post("/", function(req, res) {
  if (req.body.button === "Work Items") {
    let workItem = req.body.newItem;
    workItems.push(workItem);
    res.redirect("/work");
  } else {
    items.push(req.body.newItem);
    res.redirect("/");
  }


});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work Items",
    newListItems: workItems,
  });
});

app.post("/work", function(req, res) {

});

app.get("/about", function(req, res) {
  res.render("about", {});
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
