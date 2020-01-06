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

// post

app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    
      freindsData.push(req.body);
      res.json(true);
    
  });

};