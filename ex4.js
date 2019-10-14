var express= require("express")();

express.get("/",function(req,resp){
    resp.send("Route without parameter");
});
express.get("/:name",function(req,resp){
    var name = req.params.name;
    resp.send("Hello "+name);
});

express.listen(9001, () => console.log("Web API started listening..."));



