module.exports = function (dir, ext, callback) {

    var fs = require('fs');
    var path = require('path');
    var data = [];
    fs.readdir(dir, function (err, list) {

        if(err) {
            return callback(err);
        }

        list.forEach(function (file) {
            if (path.extname(file) === '.' + ext) {
                callback(null, file);
                data.push(file);
            }
        });

        return callback(null, data);
    });
};
