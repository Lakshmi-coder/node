//Step1: Import module
var express = require("express");
//Step2: instantiate
var server = express();
//Step3: start listening
server.listen(9000,()=>console.log("Express.js started listening..."));