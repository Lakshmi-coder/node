var express= require("express")();

express.get("/",function(req,resp){
    resp.send("Welcome to Web API using express");
});
express.get("/wishes",function(req,resp){
    var hour = d.getHours();
    if ( hour<12 )
        resp.send("Good Morning!");
    else if ( hour<16)
        resp.send("Good Afternoon!");
    else
        resp.send("Good Evening!");
});

var d= new Date();
express.get("/date",function(req,resp){
    
    resp.send("Date is: "+d.toLocaleDateString());
});
express.get("/time",function(req,resp){
    
    resp.send("Time is: "+d.toLocaleTimeString());
});

express.listen(9001, () => console.log("Web API started listening..."));
