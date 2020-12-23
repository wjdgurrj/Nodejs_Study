console.time('Timer');

var sum = 0;
for(var i = 1; i<10000;i++){
    sum += 1;
}

console.log("sum :", sum);
console.timeEnd("Timer");