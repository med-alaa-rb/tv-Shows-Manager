var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var route1 = require("./serRouter/route1");
var route2 = require("./serRouter/route2");

app.use(cors());
app.use(bodyParser.json());

app.use("/", route1);
app.use("/", route2);

var port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`app is listnening to http://localhost:${port}/`)
);
