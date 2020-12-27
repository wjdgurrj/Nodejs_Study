const { ESRCH } = require('constants');
var http = require('http');

var server = http.createServer(function(req,res){
    console.log("method : ", req.method);
    console.log("url : ", req.url);
    console.log("header : ", req.headers);

    res.write("Hello world");
    res.end();
}).listen(3000);