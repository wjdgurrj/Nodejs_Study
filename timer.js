const { setTimeout } = require("timers");

function sayHello(){
    console.log("Hello World");
}

setTimeout(() => {
    sayHello();
}, 3*1000);

var t = setTimeout(sayHello,10);
clearTimeout(10);

function sayHello2(){
    console.log("Hello World2");
}
setInterval(function() { // 반복해서 만들어내는 함수
    sayHello2();
}, 3 * 100)