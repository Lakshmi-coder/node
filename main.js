
var http = require("http");
var server = http.createServer(function(req,resp){
    resp.writeHead(200,{'content-Type':'Text'});
    resp.write("Hello Client...");
    resp.end();
});
server.listen(9000,function(){
console.log("Server started listening...");
});