var pathUtil = require('path');

var parsed = pathUtil.parse('/usr/tmp/local/image.png')
console.log(parsed);

console.log(parsed.base); // 파일 요소들
console.log(parsed.ext); // 파일 확장자