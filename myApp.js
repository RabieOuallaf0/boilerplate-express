var express = require('express');
var app = express();
var absolutePath = __dirname + "/views/index.html";
var staticPath = __dirname + "/public ";


app.get("/", function(req, res, next){ 
    res.sendFile(absolutePath);
    next;
});

app.use('/public', express.static(staticPath));    


app.get("/json", function(req, res){
    res.json({"message": "Hello json"});
});




















 module.exports = app;
