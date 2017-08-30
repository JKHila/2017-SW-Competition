var db = require('../models/userDB.js');


exports.facebook_login = function(req,res,next){
    var fbUserEmail = req.body.fbUserEmail;
    var fbAccessToken = req.body.fbAccessToken;

    var findConditionfbUserEmail = {
        email: fbUserEmail
    }
    users.findOne(findConditionfbUserEmail)
        .exec(function(err, user){
            if(err){
                res.json({
                    type: false,
                    data: "Error occured "+err
                });
            }
            else if(!user){
                console.log('user not found');
                fbSignup(fbUserEmail,fbAccessToken,function(err,savedUser){
                    console.log(1);
                    if(err){
                        res.json({
                            type: false,
                            data: "Error occured "+err
                        });
                    }else{
                        res.json({
                            type: true,
                            data: savedUser,
                            token: savedUser.jsonWebToken
                        })
                    }
                })
            }else if(user){
                console.log('user');
                console.log(user);
                user.fbToken = fbAccessToken;
                user.save(function(err,savedUser){
                    res.json({
                        type: true,
                        data: user,
                        token: user.jsonWebToken
                    });
                });
            }
        });
}

function fbSignup(fbUserEmail,fbAccessToken,next){
    var userModel = new users();
    userModel.email = fbUserEmail;
    userModel.fbToken = fbAccessToken;
    userModel.save(function(err,newUser){
        newUser.jsonWebToken = jwt.sign(newUser,jwtSecret);
        newUser.save(function(err, savedUser){
            next(err, savedUser);
        });
    });
}
exports.sign_up = function(req,res){
    var id = req.body.reqId;
    var pw = req.body.reqPw;
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
    var id = req.body.reqId;
    var pw = req.body.reqPw;
    data = [id,pw];
    db.login(data,function(err,results){
        try{
            if(results[0].cnt == 1){
                req.session.user_id = id;
                res.send('login success');
            }else{
                res.send('login failed');
            }
        }catch(err){
            console.log(err);
        }
    });
}