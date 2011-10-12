var config = require('./config');
var dispatcher = require('./dispatcher');
var cookies = require('./cookies');

module.exports = function(handler, callback){
    handler.app = {
        config: config,
        cookies: new cookies(handler.request, handler.response)
    };
    callback({
        collect: function(callback){
            dispatcher(handler).collect(handler);
            callback();
        },
        transform: function(doc){
            handler.page.transform(handler, doc);
        }
    });
}
