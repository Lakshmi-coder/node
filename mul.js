var http = require("http");
var port=9000;

var server = http.createServer(function(req,resp){
    resp.writeHead(200,{'content-Type':'text/plain'});
    var n=8;
    for ( var i=1 ;i<=10; i++ )
        resp.write(`${n} X ${i} = ${n*i} \n`);

        resp.end();

});
server.listen(port,function(){
    console.log("server started listening...");
});