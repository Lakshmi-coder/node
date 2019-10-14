//Receive name at url and display
var http = require("http");
var port=9000;

var server = http.createServer(function(req,resp){
    resp.writeHead(200,{'content-Type':'text/plain'});
   
    var url = req.url;
    url = url.substr(1);
    resp.write(`Hello ${url}`);
    resp.end();
});
   
server.listen(port,function(){
        console.log("server started listening....");
});
