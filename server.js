var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var path = require("path");
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });