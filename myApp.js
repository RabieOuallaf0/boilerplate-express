var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var absolutePath = __dirname + "/views/index.html";
var staticPath = __dirname + "/public ";

app.use(function(req, res, next){
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});


app.get("/", function(req, res){ 
    res.sendFile(absolutePath);
});

app.use('/public', express.static(staticPath));    


app.get("/json", function(req, res){
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "HELLO JSON"});
    }else {
        res.json({'message': 'Hello json'});
    };
});

function getCurrentTime() {
    return new Date().toString();
};

app.get("/now", function(req, res, next) {
    req.time = getCurrentTime();
    next();
},function(req, res){
    res.json({time: req.time})
});


app.get("/:word/echo", function(req, res){
    res.json({echo: req.params.word});
});

app.get("/name", function(req, res) {
    res.json( {name : req.query.first + " " + req.query.last})
});

app.post("/name", function(req, res){
    res.json({name : req.body.first + " " + req.body.last});
});

app.use('/bodyparser' ,bodyParser.urlencoded({extended: false}));








 module.exports = app;
