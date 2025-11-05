var express = require("express");
var server = express();
var bodyParser = require("body-parser");

server.use(express.static(__dirname+"/Public")); 
server.use(bodyParser.urlencoded());

server.get("/", (req,res)=>{
    res.send("Hello World!");
})

server.get("/about", (req,res)=>{
    res.send("NodeJS");
})

server.listen(8080)