var express = require('express');
var app = express();
var absolutePath = __dirname + "/views/index.html";
var staticPath = __dirname + "/public ";
require('dotenv').config();


app.get("/", function(req, res){ 
    res.sendFile(absolutePath);
});

app.use('/public', express.static(staticPath));    


app.get("/json", function(req, res){
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "HELLO JSON"});
    }else {
        res.json({"message": "hello json"});
    };
});


console.log(process.env.MESSAGE_STYLE);

















 module.exports = app;
