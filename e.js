var em = require("./employeeModule");
var _= require("underscore");
var e1 = _.filter(em.employees,x=>x.job=="Trainer");
console.log(e1);