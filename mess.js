var http = require("http");
var port=9000;

var d = new Date();

var server = http.createServer(function(req,resp){
    resp.writeHead(200,{'Content-Type':'text/plain'});
    resp.write("Hello Client...\n")
    resp.write(`Date is: ${d.toLocaleDateString()} \n` );
    resp.write(`Time: ${d.toLocaleTimeString()} \n`);
    resp.end();
})

server.listen(port,function(){
    console.log("Server started listening....");

});

