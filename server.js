var express = require("express");
var path = require("path");
var PORT = 3000;
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Add the application routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });

// app.post("/api/friends", function (req,res){
//     console.log("entering api/friends");
//     console.log(req.body);
//     console.log(req.params);
//     res.send('Hello Adetomi');

// });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });