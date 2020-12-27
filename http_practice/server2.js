var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
    var parsed = url.parse(req.url, true);
    var query = parsed.query;

    var start = parseInt(query.start);
    var end = parseInt(query.end);

    if( !start || !end){ // query에 값이 입력되지 않았을 때 
        res.statusCode = 404;
        res.end("Wrong Parameter");
    }
    else{ // url query에 값이 제대로 입력이 되었다면
        var result = 0;
        for(var i = start; i<end ;i++){
            result += i;
        }
        res.statusCode = 200;
        res.end("Result : " + result);
    }
}).listen(3000);