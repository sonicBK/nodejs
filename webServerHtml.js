var html = require('http');
var fs = require('fs');

html.createServer(function (request, resp) {
    resp.writeHead(200, {"Content-Type": "text/html"});
    var index = fs.readFileSync('./index.html', 'utf-8');
    var content = fs.readFileSync('./content.html', 'utf-8');
    index = index.replace('{content}', content);
    resp.end(index);
}).listen(7777);