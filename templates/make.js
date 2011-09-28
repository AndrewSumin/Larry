var fs = require('fs'),
    vm = require('vm');

vm.runInThisContext(fs.readFileSync('pages/index/index.bemhtml.js', 'utf-8'));

console.log(BEMHTML.apply({"block":"b-page"}));
