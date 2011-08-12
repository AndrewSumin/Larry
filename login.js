module.exports = {
    collect: function(handler){
    },
    transform: function(handler, doc){
        var response = handler.response;
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.write('<!DOCTYPE html><head><html><title>Mail.ru вход</title></head><body>Введите логин пароль</body></html>');
        response.end('\n');
    }
}
