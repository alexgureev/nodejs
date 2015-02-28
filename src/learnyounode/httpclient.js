/*
var http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
})
*/

var http = require('http');

var callback = function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
        console.log(data);
    });
};

http.get(process.argv[2], callback);
