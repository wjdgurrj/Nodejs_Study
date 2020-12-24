var fs = require('fs');

var os = fs.createWriteStream('./output2.txt');

os.on('finish',function(){
    console.log('finish!');
});

/*os.write('1234');
os.write('5678');
os.end('9'); //end를 실행하면 finish 안에 생성된 문구가 실행이 됨.
*/

var is = process.stdin;
is.pipe(os);