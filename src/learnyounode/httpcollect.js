/* npm install bl */
var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');

    response.pipe(bl(function (err, data) {
        if(err) {
            console.error(err);
        }
        console.log(data.length);
        console.log(data.toString());
    }));
});