const { json } = require("body-parser");
const { log } = require("console");
const express = require("express");
const app = express();

app.use("/", function (req, res, next) {
  console.log("i am other middleware");
  next();
});

app.use("/profile", (req, res, next) => {
  console.log("i reached before profile page server");
  next();
});

app.use(express.json());

app.get("/profile", (req, res) => {
  res.send("i am your profile");
});

app.get("/", (req, res) => {
  res.send("i am at homepage");
});

app.listen(5001, () => {
  console.log("server stated on 5001");
});
