var url = require('url');

var urlstr = 'https://search.naver.com/search.naver?where=nexearch&query=%EA%B0%80%EC%9A%94%EB%8C%80%EC%A0%84&sm=top_lve.ag10sgrpmamsipenpspp&ie=utf8'
var parsed = url.parse(urlstr, true); // true로 하게 되면은 querystring의 객체를 형성하여 객체별로 파악할 수 있다.
// console.log(parsed); // url 정보를 알 수 있다.

// url 정보중 특정 값만을 알고 싶을 때

//console.log('protocol : ', parsed.protocol);
//console.log('host : ', parsed.host);
console.log('query : ', parsed.query);