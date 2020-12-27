function task1(callback){
    console.log("Task1 시작");
    setTimeout(function(){
        console.log("Task1 끝");
        callback("error", 'Task1 결과'); // 첫번째 파라미터에는 에러가 났을 시 
    }, 300);
}

function Task2(callback){
    console.log("Task2 시작");
    setTimeout(function(){
        console.log("task2 끝");
        callback(null, "task2 결과");
    },200);
}

var async = require('async');
async.series([task1, Task2], function(err, results){
    if(err){
        console.log("error : ", err);
    }
    console.log("비동기 동작 모두 종료", results);
});