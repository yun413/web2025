var express = require("express");
var server = express();
var bodyParser = require("body-parser");

server.use(express.static(__dirname+"/Public")); //"/"後面為文件夾名稱
server.use(bodyParser.urlencoded());

var DB = require("nedb-promises");
var ServiceDB = DB.create(__dirname+"/Service.db");//"/"後面為文件夾名稱

server.get("/", (req,res)=>{
    res.send("Hello World!");//為8080port的首頁內容
})

server.get("/services", (req,res)=>{

    ServiceDB.find({},{_id:0}).then(results=>{
        res.send(results);
    }).catch(error=>{

    })
})

server.get("/portfolio", (req, res) => {
    var Portfolio = [
        { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
        { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
        { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" },
        { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
        { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
        { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" }
    ]
    res.send(Portfolio);
})

server.get("/about", (req, res) => {
    res.send("Welcome " + req.query.user + " to My first NodeJS server!");
})

server.listen(8080)