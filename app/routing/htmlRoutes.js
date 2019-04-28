var path = require("path");


// Basic route that sends the user first to the AJAX Page
module.exports = function(app) {
    app.get("/survey", function(req, res) {
      console.log("confirmed");
      res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
  
  
    // app.get("/api/friends", function(req, res) {
    //   console.log("confirm data friends")
    //   res.sendFile(path.join(__dirname + "/../data/friends.js"));
    // });
  
    app.use("", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
  
  };