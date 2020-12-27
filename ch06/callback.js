function task1(callback){
    console.log("Task 1 시작");
    setTimeout(function(){
        console.log("Task 1 끝");
        callback();

    }, 300);
}
function task2(callback){
    console.log("Task 2 시작");
    setTimeout(function(){
        console.log("Taks 2 끝");
        callback();
    }, 200);
}
/*
함수의 callback을 주석처리하고 사용하게 되면은
비동기 방식인 Task1 시작 -> Task2 시작 -> Task2 끝 -> Task1 끝
순서대로 실행이 된다. 그러나 Task1의 결과를 사용하여 Task2를 사용하는 경우에는
이렇게 하게 되면 에러가 난다. 따라서 실행함수 안에 함수를 넣어
callback을 시켜줘야지 순차적으로 진행이 되어진다.
*/
task1(function(){
    task2(function(){

    });
});