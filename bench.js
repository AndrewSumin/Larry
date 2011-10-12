var http = require('http');

http.request({host:'dreadatour.ru', port:80, path:'/larry.js', method:'GET'}, function(response){
    var body = new Array();
    response.on('data', function(chunk){body.push(chunk)})
            .on('end', function(){
                var i, join;
                console.time('join');
                for (i = 0; i < 100; i++){
                    join = body.join('');
                }
                console.timeEnd('join');
                console.time('parse');
                for (i = 0; i < 100; i++){
                    JSON.parse(join);
                }
                console.timeEnd('parse');
            });
}).end()
