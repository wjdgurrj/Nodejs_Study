function task1 (fulfill, reject){
    console.log("Task1 시작");
    setTimeout(function(){
        console.log('Task1 끝');
        fullfilled("Task1 결과")
        reject("error msg");
    },300);
}

function Task2 (fulfill, reject){
    console.log("Task2 시작");
    setTimeout(function(){
        console.log('Task2 끝');
        reject("Task2 결과");
    },300);
}

function fullfilled(result){
    console.log("fullfilled : ", result);
}
function rejected(err){
    console.log("rejected : ", err);
}

new Promise(task1).then(fullfilled, rejected);