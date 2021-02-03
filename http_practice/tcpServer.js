﻿var net = require('net');
var server = net.createServer(function(socket){
    console.log("클라이언트 접속");
    socket.write("welcome to Socket Server");

    socket.on('data', function(chunk){
        console("클라이언트가 보냄 : ", chunk.toString());
    });

    socket('end', function(){
        console.log("클라이언트 접속 종료");
    });
});

server.on('listening', function(){
    console.log("server is listening");
});
server.on('close', function(){
    console.log('server closed');
});

server.listen(3000);