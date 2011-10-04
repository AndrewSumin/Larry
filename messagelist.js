var fs = require('fs'),
    vm = require('vm');

vm.runInThisContext(fs.readFileSync(__dirname + '/templates/pages/messagelist/messagelist.bemhtml.js', 'utf-8'));

module.exports = {
    collect: function(handler){
        handler.put(
            'checknew',
            handler.http('http://e.mail.ru/cgi-bin/checknew',
                {
                    query:{force:'1', folder:'0'},
                    headers:{'Cookie': 'Mpop=' + handler.cookies.get('Mpop') + ';'}
                },
                function(result){
                    return result.data.messages && result.data.messages.map(function(message){
                        return {
                            block: 'message',
                            content: [
                                {elem: 'from', content: message.FromShort},
                                {elem: 'subject', content: message.Subject}
                            ]
                        }
                    })
                }
            )
        );
    },
    transform: function(handler, doc){
        var response = handler.response;
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.write(BEMHTML.apply(
            {
                block:'b-page',
                content:[
                    {
                        block:'message-list',
                        content: doc.checknew
                    }
                ]
            }
        ));
        response.end('\n');
    }
}

