const express = require("express");
const { urlencoded } = require("body-parser");
const cors = require("cors");
const Routes = require("./routes/web");

const app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use(urlencoded({ extended: true }));
Routes(app);
module.exports = app;
