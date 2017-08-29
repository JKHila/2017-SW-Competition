var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var user = require('./routes/userRoute');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
    secret: 'keboard cat',
    resave: false,
    saveUninitialized: true
}))
app.use('/',user);

app.listen(8888,function(){
    console.log("server start...");
}); 

module.exports = app;