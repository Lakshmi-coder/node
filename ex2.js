//respond html with collection of items
var http = require("http");
var em = require('./employeeModule');
var port=9000;

var server = http.createServer(function(req,resp){
    var employees = em.employees;
    resp.writeHead(200,{'Content-Type':'text/html'});    
    resp.write(`<h1> Node.js APP </h1>
        <ol>
        ${employees.map(e=> "<li>" + e.ename +"</li>"  )}    
        </ol>
    `);
    resp.end( );
});
server.listen(port,function(){
    console.log("Server started listening...");
});