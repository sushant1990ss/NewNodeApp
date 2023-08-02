const express = require("express");
const bodyParser = require("body-parser");
const WebRoutes = require("./routes/web");

let app = express();

//config body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config view engine
// configViewEngine(app);

//config web routes
WebRoutes(app);

let port = process.env.PORT || 3022;

app.listen(port, () => {
  console.log(`Messenger bot is running at the port ${port}`);
});
