//Step1: Import module and instantiate
var express = require("express")();

express.get('/:name',function(req,resp){
  var name = req.params.name;
    resp.send(`Hello ${name} welcome`);
});
express.get("/addition/:a/:b",function(req,resp){
    var a =Number( req.params.a);
    var b =Number( req.params.b)
    var c = a+b;
    resp.send(`Add of ${a} and ${b} is ${c}`);
});

//Step3: start listening
express.listen(9000,()=>console.log("Express.js started listening..."));