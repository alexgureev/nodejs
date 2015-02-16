var fs = require('fs');
var path = process.argv[2];
var ext = '.' + process.argv[3];
var pathModule = require('path');

function readDirectory(path, ext, callback) {
    fs.readdir(path, function doneReading(error, files) {
        callback(files, ext);
    });
}

function filterAndOutputFilesByExt(files, ext) {
    for(var i = 0; i < files.length; i++) {
        if(pathModule.extname(files[i]) == ext)
        outputFilename(files[i]);
    }
}


function outputFilename(fileName) {
    console.log(fileName);
}

readDirectory(path, ext, filterAndOutputFilesByExt);

// Here's the official solution in case you want to compare notes:
//var fs = require('fs');
//var path = require('path');
//
//fs.readdir(process.argv[2], function (err, list) {
//    list.forEach(function (file) {
//        if (path.extname(file) === '.' + process.argv[3])
//            console.log(file);
//    })
//});
