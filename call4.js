require("http")
.createServer(function(req,resp){
    resp.writeHead(200,{'Content-Type':'text/plain'});
    resp.end("Hello world...");
})
.listen(9000, ()=>console.log("HTTP Server started listening..."));