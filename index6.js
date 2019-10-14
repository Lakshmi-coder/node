//Step1: Import module and instantiate
var express = require("express")();
express.get('/',function(req,resp){
    resp.send("Welcome to Web API");
});

express.get('/date',function(req,resp){
    resp.send(`Date is: ${new Date().toLocaleDateString()}`);
});
//Step3: start listening
express.listen(9000,()=>console.log("Express.js started listening..."));