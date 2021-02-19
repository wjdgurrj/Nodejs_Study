var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:'Secret Key'
}));

app.use(bodyParser.urlencoded({extended:false}));

app.post('/login', l);
app.get('/personal', p);
app.listen(3000);

function l(req,res){
    var id = req.body.id;
    var pw = req.body.pw;
    if( id ==='user' && pw ==='961021'){
        req.session.userid = id;
        res.send('success');
    }
    else{
        res.send('fail');
    }
}

function p(req,res){
    var id = req.session.userid;
    if(id){
        res.send("Private page for : " + id);
    }
    else{
        res.sendStatus(401);
    }
}