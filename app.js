// importing modules
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();
const port = process.env.port || 1337;
const route = require("./routes/route");

const mongodburl =
  "mongodb://msingh:password123@ds014118.mlab.com:14118/studentmanagement";
//const mongodburl = "mongodb://localhost:27017/studentmanagement";

mongoose.connect(mongodburl);
mongoose.connection.on("connected", () => {
  console.log("Connected successfully");
});
mongoose.connection.on("error", err => {
  if (err) {
    console.log("Error in database connection : " + err);
  }
});

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", route);

app.get("/", (req, res) => {
  res.send("Welcome to Sogeti");
});

app.listen(port, () => {
  console.log("Server started at port: " + port);
});
