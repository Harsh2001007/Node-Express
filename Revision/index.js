const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile/:profilename", (req, res) => {
  res.send(req.params.profilename);
});

app.get("/author/:authorname/:authorId", (req, res) => {
  res.send(
    `the author is ${req.params.authorname} and this doc is ${req.params.authorId}`
  );
});

app.listen(5001, () => {
  console.log("server stated on 5001");
});
