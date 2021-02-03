﻿var net = require('net');

var ip = '127.0.0.1';
var port = 3000;

var socket = new net.Socket();
socket.connect({host:ip, port:port}, function(){
    console.log('서버와 연결 성공');

    socket.write("hello socket server\n");
    socket.end();

    socket.on('data', function(chunk){
        console.log("서버가 보냄 : ", chunk.toString());
    });

    socket.on('end', function(){
        console.log('서버 연결 종료');
    });
});