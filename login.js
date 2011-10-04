var fs = require('fs'),
    vm = require('vm');

vm.runInThisContext(fs.readFileSync(__dirname + '/templates/pages/index/index.bemhtml.js', 'utf-8'));

module.exports = {
    collect: function(handler){
    },
    transform: function(handler, doc){
        var response = handler.response;
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.write(BEMHTML.apply(
            {
                block:'b-page',
                content:[
                    {
                        block:'login-form',
                        content: handler.cookies.get('Mpop')
                    }
                ]
            }
        ));
        response.end('\n');
    }
}
