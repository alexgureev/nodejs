var myobject = { title: "Hello"};

var callback = function(message) {
    console.log(message);
};

myobject.hello = function(username, callback) {
    console.log(this.title + ' ' + username);

    callback('outputted');
};

myobject.hello(process.argv[2], callback);