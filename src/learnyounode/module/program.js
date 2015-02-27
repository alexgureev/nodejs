var mymodule = require('./mymodule.js');

function moduleCallback(error, output) {
    if(error) {
        console.log(error);
    } else {
        console.log(output);
    }
}

mymodule(process.argv[2], process.argv[3], moduleCallback);