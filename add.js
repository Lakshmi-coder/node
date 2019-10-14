var express= require("express")();

express.get("/",function(req,resp){
    resp.send("Route without parameter");
});
express.get("/:name",function(req,resp){
    var name = req.params.name;
    resp.send("Hello "+name);
});
express.get('/square/:n',function(req,resp){
    var n = Number( req.param("n"));
      resp.send(`Square of ${n} is ${n*n}`);
});
express.get("/add/:a/:b",function(req,resp){
    var a = Number( req.param("a"));
    var b = Number( req.param("b"));
    var c =a+b;
    resp.send(`Add of ${a} and ${b} is ${c}`);
});

express.listen(9001, () => console.log("Web API started listening..."));
