var http = require('http');
var config = {
    host: '192.168.1.190',
    port: 1337
};

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(config.port, config.host);

console.log('Server running at http://' + config.host + ':' + config.port + '/');
