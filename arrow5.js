var http = require("http");
var port = 9000;
var server = http.createServer((x,y) => {
    y.writeHead(200,{"Content-Type":"text"});
    y.end("Hello client...");
});
server.listen(port, () => console.log("server starting listining...") );