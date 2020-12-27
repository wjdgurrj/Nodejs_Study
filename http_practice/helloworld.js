var http = require('http');

var server = http.createServer(function(req,res){
    res.write("hello World");
    res.end();
});


server.listen(3000);