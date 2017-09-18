var config = require('../config/config')

exports.setBasicData = function(data,callback){
    console.log(data);
    try{
        config.pool.getConnection(function(err,conn){
            conn.query('INSERT INTO SWG2017.cn_body_info (user_id, gender, age, tall, weight, basic_metabolism) VALUES(?, ?, ?, ?, ?, ?)',data, function(err,rows) {
                callback(err,rows);                
                conn.release();
            });
        });
    }catch(err){
        console.log('error:',err);
    }
};
exports.checkId = function(id,callback){
    try{
        config.pool.getConnection(function(err,conn){
            conn.query('SELECT COUNT(id) AS cnt FROM user WHERE id=?',[id], function(err,rows) {
                conn.release();
                callback(err,rows);
            });
        });
    }catch(err){
        console.log('error:',err);
    }
};
exports.registId = function(data,callback){
    try{
        console.log(data);
        config.pool.getConnection(function(err,conn){
            conn.query('INSERT INTO testDB.user VALUES(?, ?)',data, function(err,rows) {
                callback(err,rows);                
                conn.release();
            });
        });
    }catch(err){
        console.log('error:',err);
    }
};
exports.login = function(data,callback){
    try{
        config.pool.getConnection(function(err,conn){
            conn.query('SELECT COUNT(id) AS cnt FROM user WHERE id=? and pw=?',data, function(err,rows) {
                conn.release();
                callback(err,rows);
                if(rows[0].cnt == 1){
                    conn.query('UPDATE user SET userCount = userCount + 1 WHERE id = ?',data[0]);
                }
            });
        });
    }catch(err){
        console.log('error:',err);
    }
};