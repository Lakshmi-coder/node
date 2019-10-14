//http server responding list of date
var http = require("http");
var port = 9000;
var d =new Date();
var server = http.createServer( (req,resp) =>{
    resp.writeHead(200,{'Content-Type':'string'});
    
    this.msg = d.toDateString();
        resp.write(date[i]);
    resp.end();
});

server.listen(port, ()=> console.log("Server started listening...."));