//http server responding list of fruits
var http = require("http");
var port = 9000;
var server = http.createServer( (req,resp) =>{
    resp.writeHead(200,{'Content-Type':'text'});
    var fruits=["Apple","Banana","Cherry","Grapes","Mango"];
    for ( let i=0; i <fruits.length ;i++ )
        resp.write(fruits[i] +"\n");
    resp.end();
});

server.listen(port, ()=> console.log("Server started listening...."));