var express = require('express');
var userController = require('../controllers/userController')
var index = express.Router();

index.post('/signup',function(req,res){
    userController.sign_up(req,res);
});
index.get('/login',function(req,res){
    userController.login(req,res);
});

module.exports = index;