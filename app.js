var express = require('express');
var user = require('./routes/userRoute');
var path = require('path');
var session = require('express-session');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/',user)

app.use(session({
    secret: 'keboard cat',
    resave: false,
    saveUninitialized: true
}))

app.listen(8888,function(){
    console.log("server start...");
}); 

module.exports = app;