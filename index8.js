//Step1: Import module and instantiate
var express = require("express")();

express.get('/:name',function(req,resp){
  var name = req.params.name;
    resp.send(`Hello ${name} welcome`);
});

//Step3: start listening
express.listen(9000,()=>console.log("Express.js started listening..."));