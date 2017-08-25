var express = require('express');

var app = express();


app.get('/',function(req,res){
    console.log(req["x"]);
    console.log(req["y"]);
    res.send("222");
});

app.listen(8888,function(){
    console.log("sdf");
}); 

