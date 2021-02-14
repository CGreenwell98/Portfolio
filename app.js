const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/contact-me", function (req, res) {
  res.render("contact");
});

app.get("/CV", function (req, res) {
  res.download("./CV/Christopher_Greenwell_CV.pdf");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
