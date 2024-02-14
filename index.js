const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "success",
  });
});

app.get("/data", (req, res, next) => {
  res.status(200).json({
    data: {},
    message: "success",
  });
});

app.listen(8080, () => {
  console.log(`Sample nodejs app running on port: 8080`);
});
