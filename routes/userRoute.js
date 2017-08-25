var express = require('express');
var userController = require('../controllers/userController')
var index = express.Router();

index.post('/signup',function(req,res){
    userController.sign_up(req,res);
});
index.get('/test',function(req,res){
    userController.test(req,res);
});

module.exports = index;