var fs = require('fs');
var modelsPath = __dirname + '/models';
var modelList = {};

fs.readdirSync(modelsPath).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        var m = require(modelsPath + '/' + file);
        modelList[m.name] = m.model;
        console.log("Added " + m.name);
    }
});

module.exports = modelList;