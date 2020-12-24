var querystring = require('querystring');

var str = 'where=nexearch&query=%EA%B0%80%EC%9A%94%EB%8C%80%EC%A0%84&sm=top_lve.ag10sgrpmamsipenpspp&ie=utf8';
var parsed = querystring.parse(str);
//console.log(parsed); 전체를 알 수 있는 내용

console.log('where : ', parsed.where);
console.log('query : ', parsed.query);
console.log('sm : ', parsed.sm);
console.log('computer : ', parsed.computer); // 객체안에 정의되지 않은 변수에 대해서는 출력이 undefined로 나오는 걸 알 수 있다.