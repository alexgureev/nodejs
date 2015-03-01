var mymodule = require('./mymodule.js');

function moduleCallback(error, output) {
    (error) ? console.error(error) : console.log(output);
}

mymodule(process.argv[2], process.argv[3], moduleCallback);