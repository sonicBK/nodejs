var html = require('http');

html.createServer(function (request, resp) {
    resp.writeHead(200, {"Content-Type": "text/plain"});
    resp.end("<h2>Vũ Đình Hảo - TechLead</h2>");
}).listen(8888);