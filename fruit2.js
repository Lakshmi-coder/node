var fruits=["Apple","Banana","cherry","Grapes","Mango","papaya"];

var _ = require("underscore");

_.filter ( fruits, function(item,index){
    console.log(`${index} = ${item}`);
});