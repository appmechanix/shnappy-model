var User = require('../lib/index').User;

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/photohosting");

console.log(User);

exports.test_that_can_connect = function (test) {
    User.find(function (err, data) {
        test.notEqual(null, data);
        test.done();
    });
};

