util = require('util');

process.on('connection', function (stream) {
    console.log('someone connected!');
});
console.log(util.inspect(process.listeners('connection'))); // [ [Function] ]