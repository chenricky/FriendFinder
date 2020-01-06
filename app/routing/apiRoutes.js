var path = require("path");
var freindsData = require("../data/friends");


//routes

module.exports = function(app) {
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  
  // Displays all friends
  app.get("/api/friends", function(req, res) {
    return res.json(freindsData);
  });
  
  // Displays a single freind, or returns false
  app.get("/api/friends/:friend", function(req, res) {
    var chosen = req.params.friend;
  
    console.log(chosen);
  
    for (var i = 0; i < freindsData.length; i++) {
      if (chosen === freindsData[i].routeName) {
        return res.json(freindsData[i]);
      }
    }
  
    return res.json(false);
  });
};