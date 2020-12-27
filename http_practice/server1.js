var http = require('http');
var fs = require('fs');
const { ESRCH } = require('constants');

var server = http.createServer(function(req,res){
    fs.access('./call.png', function(err){ // 이렇게 파일 이름을 잘못 입력하게되면 에러를 출력하게 된다.
        if(err){
            res.statusCode = 404;
            res.end();
            return ;
        }
        fs.readFile('./cat.png', function(err,data){
            res.end(data);
        });
    });
}).listen(3000);