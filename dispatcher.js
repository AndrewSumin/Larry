module.exports = function(handler){
    if (!handler.request.cookies.get('session')){
        handler.page = require('./login');
    }
    return handler.page;
};
