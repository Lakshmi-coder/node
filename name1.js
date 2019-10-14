var http = require("http");
var em = require('./employeeModule');
var port=9000;

var server = http.createServer(function(req,resp){
    resp.writeHead(200,{'Content-Type':'text/json'});
    for ( let e of em.employees)
        resp.write(JSON.stringify(e)+"\n");
    resp.end( );
});

server.listen(port,function(){
    console.log("Server started listening...");
});
