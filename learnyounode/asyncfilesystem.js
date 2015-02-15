var fs = require('fs');

function calculateLines(callback) {
    fs.readFile(process.argv[2], function doneReading(error, fileContents) {
        callback(fileContents.toString().split('\n').length - 1);
    });
}

function outputLines(lines) {
    console.log(lines);
}

calculateLines(outputLines);
