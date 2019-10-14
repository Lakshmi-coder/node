// display 10 numbers at client
var http = require("http");
var port=9000;
var server = http.createServer(function(req,resp){
    resp.writeHead(200,{'Conent-Type':'text/plain'});
    for ( var i=1; i<=10; i++ )
         resp.write(`${i} \n`);

         resp.end();

});
server.listen(port,function(){
    console.log("server started listening....");
});