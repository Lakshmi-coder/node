var express= require("express")();

express.get("/",function(req,resp){

    resp.send("Welcome to Web API using express");
});
var d= new Date();
express.get("/wishes",function(req,resp){
    resp.send("Date is: "+d.toLocaleDateString());
});

express.listen(9001, () => console.log("Web API started listening..."));