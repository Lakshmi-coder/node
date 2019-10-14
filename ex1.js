var express= require("express")();

express.get("/",function(req,resp){
    resp.send("Welcome to Web API using express");
});

express.listen(9001, () => console.log("Web API started listening..."));