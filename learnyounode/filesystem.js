var fs = require('fs');
var filePath = process.argv[2];
var buffer = fs.readFileSync(filePath);
var str = buffer.toString();
var splitedText = str.split('\n');

console.log(splitedText.length - 1);


