//handling form get and post
var http = require("http");
var port=9000;

var server = http.createServer(function(req,resp){
    resp.writeHead(200,{'Content-Type':'text/html'});    
    resp.write(`<h1> Handling form </h1>
        <form method="post">
            <input type="submit" />
        </form> 
        ${req.method}
    `);
    resp.end( );
});
server.listen(port,function(){
    console.log("Server started listening...");
});