var http = require("http");
var url = require("url");
var port=9000;

var server =http.createServer(function(req,resp){
    resp.writeHead(200,{'content-Type':'text/plain'});
    var querystring = url.parse(req.url,true).query;
    resp.write("name is:"+querystring.name);
    resp.end( );
})
server.listen(port,function(){
    console.log("server started listening....");
});
