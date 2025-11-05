var express = require("express");
var server = express();

server.get("/", (req,res)=>{
    res.setDefaultEncoding("Hello World!");
})

server.listen(8080)