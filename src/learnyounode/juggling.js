var http = require('http')

var first = '', second = '', third = '';
var firstFlag = 0, secondFlag = 0, thirdFlag = 0;

var output = function () {
    if(firstFlag != 0 && secondFlag != 0 && thirdFlag != 0)    {
        console.log(first);
        console.log(second);
        console.log(third);
    }
};

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', function(data) {
        first += data;
    })
    response.on('error', console.error)
    response.on('end', function() {
        firstFlag = 1;
        output();
    });
})

http.get(process.argv[3], function (response) {
    response.setEncoding('utf8')
    response.on('data',  function(data) {
        second += data;
    })
    response.on('error', console.error)
    response.on('end', function() {
        secondFlag = 1;
        output();
    });
})

http.get(process.argv[4], function (response) {
    response.setEncoding('utf8')
    response.on('data',  function(data) {
        third += data;
    })
    response.on('error', console.error)
    response.on('end', function() {
        thirdFlag = 1;
        output();
    });
})