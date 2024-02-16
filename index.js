const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "success",
  });
});

app.get("/data", (req, res, next) => {
  res.status(200).json({
    data: {},
    message: "success data",
  });
});

app.listen(8080, () => {
  console.log(`Sample nodejs app running on port: 8080`);
});
