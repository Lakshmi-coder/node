//Receive name at url and display
var http = require("http");
var port=9000;

var server = http.createServer(function(req,resp){
    resp.writeHead(200,{'Content-Type':'text/json'});
   
    resp.write( JSON.stringify( {"name":"lakshmi"}));
    
    resp.end();
});

server.listen(port,function(){
    console.log("Server started listening...");
});