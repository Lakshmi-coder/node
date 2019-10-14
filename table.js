var http = require("http");
var em = require('./employeeModule');
var port=9000;

var server = http.createServer(function(req,resp){
    var employees = em.employees;
    resp.writeHead(200,{'Content-Type':'text/html'});    
    resp.write(`<h1> Node.js APP </h1>
        <table border="1"
        ${employees.map(e=> "<tr><td>" + e.ename +"</td></tr>" )}    
        </table>
    `);
    resp.end( );
});
server.listen(port,function(){
    console.log("Server started listening...");
});