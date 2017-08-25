var db = require('../models/userDB.js');

exports.sign_up = function(req,res){
    var id = req.query.reqId;
    var pw = req.query.reqPw;
    db.checkId(id,function(err,results){
        try{
            if(results[0].cnt == 0){
                data = [id,pw];
                db.registId(data,function(err,result){
                    if(result.affectedRows == 1){
                        res.send('sign up success')
                    }else{
                        res.send('sign up failed')
                    }
                })
            }else{
                res.send('overlapped id');
            }
        }catch(err){
            console.log(err);
        }
    });
}
exports.login = function(req,res){
    var id = req.query.reqId;
    var pw = req.query.reqPw;
    data = [id,pw];
    db.login(data,function(err,results){
        try{
            console.log(results);
            if(results[0].cnt == 1){
                res.send('login success');
            }else{
                res.send('login failed');
            }
        }catch(err){
            console.log(err);
        }
    });
}