const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

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

app.listen(PORT, () => {
  console.log(`Sample nodejs app running on port: ${PORT}`);
});