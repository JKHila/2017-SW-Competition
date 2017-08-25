var config = require('../config/config')

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
            });
        });
    }catch(err){
        console.log('error:',err);
    }
};