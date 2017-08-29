var express = require('express');
var userController = require('../controllers/userController')
var index = express.Router();

index.post('/signup',function(req,res){
    userController.sign_up(req,res);
});
index.post('/login',function(req,res){
    userController.login(req,res);
});
index.post('/login/facebook',function(req,res,next){
    userController.facebook_login(req,res,next);
});

module.exports = index;