var http = require("http");
var port =9000;
var server = http.createServer(function(req,resp){
    resp.writeHead(200,{"content-Type":"text"});
    resp.write("Hello");
    resp.end();
});

server.listen(port, () => console.log("Server started listening...") );