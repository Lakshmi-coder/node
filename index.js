var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
     var img = fs.readFileSync('./images/a.jpg');
     res.writeHead(200, {'Content-Type': 'image/jpg' });
     res.write(img, 'binary');
     res.end();

}).listen(9001);

