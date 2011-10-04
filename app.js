var dispatcher = require('./dispatcher');
var cookies = require('./cookies');

module.exports = function(handler, callback){
    callback({
        collect: function(callback){
            handler.cookies = new cookies(handler.request, handler.response);
            dispatcher(handler).collect(handler);
            callback();
        },
        transform: function(doc){
            handler.page.transform(handler, doc);
        }
    });
}
