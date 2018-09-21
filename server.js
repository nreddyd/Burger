var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
// var methodOverride = require("method-override");
var path = require("path");

var app = express();

var PORT = process.env.PORT | 8000;

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

// Serve static content for the app from the "public" directory in the application directory.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controller.js");

app.use("/", router);

// app.listen(PORT, function() {

app.listen(PORT, function() {
  console.log("server listening on http://localhost:" + PORT);
});
