const express = require("express");
const app = express();

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("login.ejs");
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.post("/login", (req, res) => {});
app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.post("/register", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
