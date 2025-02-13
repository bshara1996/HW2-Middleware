const express = require("express");
const app = express();
const port = 3000;

const logger = require("./logger");
const checkAdmin = require("./checkAdmin");

app.use(logger);

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to the homepage!");
});

app.get("/public", (req, res) => {
  return res.status(200).send("This is a public page.");
});

app.use(checkAdmin);

app.get("/admin", (req, res) => {
  res.status(200).send("Welcome to the admin page!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
