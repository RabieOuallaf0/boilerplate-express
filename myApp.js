require('dotenv').config();
var express = require('express');
var app = express();
var absolutePath = __dirname + "/views/index.html";
var staticPath = __dirname + "/public ";


app.get("/", function(req, res, next){ 
    res.sendFile(absolutePath);
    next;
});

app.use('/public', express.static(staticPath));    


app.get("/json", function(req, res) {
    if(process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message" : "HELLO JSON"});
    }else {
        res.json({"message" : "hello json"});
    };
});




















 module.exports = app;
