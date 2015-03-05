var http = require('http')
var url = require('url');

var server = http.createServer(function (req, res) {
    var Url = url.parse(req.url, true);
    var jsonResponse = {};

    switch(Url.pathname) {
        case '/api/parsetime' : {
            var dateObject = new Date(Url.query.iso);

            jsonResponse = {
                "hour": dateObject.getHours(),
                "minute": dateObject.getMinutes(),
                "second": dateObject.getSeconds()
            };

            break;
        }

        case '/api/unixtime' : {

            var dateObject = new Date(Url.query.iso);
            console.log(dateObject.getHours());

            jsonResponse = {
                "unixtime": Math.round(dateObject.getTime())
            };

            break;
        }
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jsonResponse));

});

server.listen(Number(process.argv[2]));