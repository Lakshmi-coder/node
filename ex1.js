var http = require("http");
var em = require('./employeeModule');
var port=9000;

var server = http.createServer(function(req,resp){
    resp.writeHead(200,{'content-Type':'text/html'});
    var e= {"id":"1","ename":"Anil", "job":"Trainer","salary":"6000"};
    resp.write(`<h1> Node.js App </h1>
        ID: ${e.id}     <br/>
        Ename: ${e.ename} <br/>
        job:${e.job}
`);

    resp.end( );
});
server.listen(port,function(){
    console.log("Server started listening....");

});

    
