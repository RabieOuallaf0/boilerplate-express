var express = require('express');
var app = express();
var absolutePath = __dirname + "/views/index.html";
var staticPath = __dirname + "/public ";
require('dotenv').config();


app.get("/", function(req, res){ 
    res.sendFile(absolutePath);
});

app.use('/public', express.static(staticPath));    


let msg = process.env.MESSAGE_STYLE==="uppercase"?"HELLO JSON":"Hello json";
app.get("/json",(req, res)=>(res.json({"message":msg})));




















 module.exports = app;
