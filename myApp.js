var express = require('express');
var app = express();
var absolutePath = __dirname + "/views/index.html";
var staticPath = __dirname + "/public ";
require('dotenv').config();


app.get("/", function(req, res){ 
    res.sendFile(absolutePath);
});

app.use('/public', express.static(staticPath));    


if (process.env.MESSAGE_STYLE=='uppercase') {
    app.get('/json', function(req, res) {
        return res.json({"message" : "HELLO JSON"})
    });
}else {
    app.get('/json', function(req, res) {
        return res.json({"message" : "hello json"})
    });
};




















 module.exports = app;
