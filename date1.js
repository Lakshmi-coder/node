var http = require("http");
var port=9000;
var d = new Date();
var server = http.createServer(function(req,resp){
    resp.writeHead(200,{'content-Type':'text/plain'});

    var url = req.url;
    if ( url=='/')
       resp.write('Hello client....');
       else if (url=='/date')
            resp.write(`Date is: ${d.toLocaleDateString()}`);
        else if ( url=='/time')
        resp.write(`Time is: ${d.toLocaleTimeString()}`);
        resp.end();
});
        server.listen(port,function(){
            console.log("server started listening....");
        });

           