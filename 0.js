var express= require("express")();

express.get("/",function(req,resp){
    resp.send("This operatation retreive data");
});

express.post("/",function(req,resp){
    resp.send("Inser data operatation ");
});

express.put("/",function(req,resp){
    resp.send("Edit data  operatation");
});
express.delete("/",function(req,resp){
    resp.send("Delete data operatation ");
});


express.listen(9001, () => console.log("Web API started listening..."));