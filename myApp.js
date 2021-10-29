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
    var jsonRes = {"message" : "hello world"};
    if(process.env.MESSAGE_STYLE = "uppercase"){
        jsonRes.message = jsonRes.message.toUpperCase()
    };

    res.json(jsonRes);
});




















 module.exports = app;
