﻿var fs = require('fs');
var pathUtil = require('path');

// 업로드 된 파일 경로
var uploadDir = __dirname + '/upload';

// 이미지 파일 경로
var imageDir = __dirname + '/image';

var http = require('http');
var formidable = require('formidable');
const { ESRCH } = require('constants');

// 업로드 된 데이터 목록
var paintList = [];

var server = http.createServer(function (req, res) {
   // 루트 경로로 요청
   if (req.url == '/' && req.method.toLowerCase() == 'get') {
      showList(res);
   }
   // <img> 태그로 인한 이미지 요청
   else if (req.method.toLowerCase() == 'get' && req.url.indexOf('/image') == 0) {
      var path = __dirname + req.url;
      res.writeHead(200, { 'Content-Type': 'image/jpeg' })
      fs.createReadStream(path).pipe(res);
   }   
   // 업로드 요청
   else if (req.method.toLowerCase() == 'post') {
      addNewPaint(req, res);
   }

});

function showList(res) {
   res.writeHeader(200, { 'content-type': 'text/html' });

   var body = '<html>';
   body += '<head><meta charset="UTF-8"></head>';
   body += '<body>';
   

   body += '<ul>';
   paintList.forEach(function (item, index) {
      body += '<li>';
      if (item.image) {
         body += '<img src="' + item.image + '" style="height:100pt"></img>';
      }
      body += item.title + "(" + item.director + "," + item.years +")";
      body += '</li>';
   });
   body += '</ul>';
   body += '<h3>새 영화 입력</h3>';
   body += '<form action="." enctype="multipart/form-data" method="post">' +
   '<div><label>영화 제목 : </label><input type="text" name="title"></div>' +
   '<div><label>영화 감독 : </label><input type="text" name="director"></div>' +
   '<div><label>년도 : </label><input type="text" name="years"></div>' +
   '<div><label>작품 이미지 : </label><input type="file" name="image" value="=choose"></div>' +
   '<input type="submit" value="올리기">' +
   '</form>';
   body += '</body></html>';

   res.end(body);
}

server.listen(3000, function () {
   console.log('Server is running on 3000');
});

function addNewPaint(req, res) {
  var form = formidable.IncomingForm();
  form.uploadDir = uploadDir;
  
  form.parse(req, function(err,fields,files){
      var title = fields.title;
      var director = fields.director;
      var years = fields.years;
      var image = files.image;

      console.log(image);
      
      var date = new Date();
      var newImageName = 'image_' + date.getHours() +date.getMinutes() + date.getSeconds();
      var ext = pathUtil.parse(image.name).ext;

      var newPath = __dirname + '/image/' + newImageName + ext;

      fs,fs.renameSync(image.path, newPath);

      var url = 'image/' + newImageName +ext;

      var info = {
          title : title,image:url, years: years, director: director,
      }

      paintList.push(info);

      res.statusCode = 302;
      res.setHeader ('Location', '.');
      res.end('Success');
  })
}
