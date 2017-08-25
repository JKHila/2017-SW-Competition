var config = require('../config/config')

exports.checkId = function(id,callback){
    try{
        const resourcePromise = config.dbPool.acquire();
        resourcePromise.then(function(client) {
            client.query('SELECT COUNT(id) AS cnt FROM user WHERE id=?',[id], function() {
                // return object back to pool
                config.dbPool.release(client);
            });
        });
    }catch(err){
        console.log('error:',err);
    }
};
exports.resgistId = function(data,callback){
    try{
        const resourcePromise = config.dbPool.acquire();
        resourcePromise.then(function(client) {
            client.query('INSERT INTO user VALUES(? ?)',data, function() {
                // return object back to pool
                config.dbPool.release(client);
            });
        });
    }catch(err){
        console.log('error:',err);
    }
};