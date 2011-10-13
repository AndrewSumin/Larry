var i, start, http = require('http'), join = 0, parse = 0;
for (i = 0; i < 100; i++){
http.request({host:'dreadatour.ru', port:80, path:'/larry.js', method:'GET'}, function(response){
    var body = new Array();
    response.setEncoding('utf8');
    response.on('data', function(chunk){body.push(chunk)})
            .on('end', function(){
                start = new Date().getTime();
                body = body.join('');
                join += (new Date().getTime() - start);
                
                start = new Date().getTime();
                JSON.parse(body);
                parse += (new Date().getTime() - start);
                console.log(join, parse);
            });
}).end()
}
