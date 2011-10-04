module.exports = function(handler){
    if (!handler.cookies.get('session')){
        handler.page = require('./login');
    }
    handler.page = require('./messagelist');
    return handler.page;
};
