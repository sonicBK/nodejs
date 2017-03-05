var fs = require('fs');
var html = require('http');

html.createServer(function(request, resp){
    resp.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream('./index.html').pipe(resp);
}).listen(5555);
