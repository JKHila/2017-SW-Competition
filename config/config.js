var mysql = require('mysql');

exports.pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'root',
  port            : '3306',
  database: 'testDB'
});


/*config.dbPool = generic_pool.createPool({
    name: 'mysql',
    create: function(callback){
        var config = {
            host: 'localhost',
            port: '3306',
            user: 'root',
            passward: 'root',
            database: 'testDB'
        };
        var client = mysql.createConnection(config);
        client.connect(function(err){
            if(err) console.error('err',err);
            callback(err,client);
        });
    },
    destroy: function(client){
        client.end();
    },
    max: 10,
    min: 2,
    idleTimeoutMillis: 30000,
    log: false
});
config.dbPool.drain().then(function() {
    config.dbPool.clear();
});

module.exports = config*/