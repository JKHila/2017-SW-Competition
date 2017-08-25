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
                        res.send('<script>alert("[신규 유저] 점수 등록을 하였습니다."); </script>')
                    }else{
                        res.send('<script>alert("점수 등록에 실패했습니다.");</script>')
                    }
                })
            }else{
                res.send('중복된 아이디');
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