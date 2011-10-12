var fs = require('fs'),
    vm = require('vm');

vm.runInThisContext(fs.readFileSync(__dirname + '/templates/pages/messagelist/messagelist.bemhtml.js', 'utf-8'));

module.exports = {
    collect: function(handler){
        handler.put(
            'checknew',
            //handler.http('http://e.mail.ru/cgi-bin/checknew',
            handler.http('http://dreadatour.ru/larry.js',
                {
                    query:{force:'1', folder:'0'},
                    headers:{'Cookie': 'Mpop=' + handler.app.cookies.get('Mpop') + ';'}
                },
                function(result){
                    handler.result = result;
                    return result.data.messages && result.data.messages.map(function(message){
                        return {
                            block: 'message',
                            content: [
                                {
                                    elem: 'from', content:[
                                        {elem: 'fromlink', url:'/message/' + message.Id, text:message.FromShort}
                                    ]
                                },
                                {elem: 'subject', content: message.Subject}
                            ]
                        }
                    })
                    return list;
                }
            )
        );
    },
    transform: function(handler, doc){
        var response = handler.response;
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        var json = {
            block:'b-page',
            head: [
                {elem: 'css', url: handler.app.config.static + '/pages/messagelist/messagelist.css'},
                {elem: 'favicon', url: handler.app.config.static + '/favicon.ico'}
            ],
            content:[
                {
                    block:'message-list',
                    content: doc.checknew
                }
            ]
        }
        var start = new Date().getTime();
        var html = BEMHTML.apply(json);
        console.log("BEMHTML.apply:" + (new Date().getTime() - start));
        response.write(html);
        response.end('\n');
    }
}

