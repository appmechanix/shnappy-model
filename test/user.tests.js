var User = require('../lib/index').User;
var mongoose = require('mongoose');

exports.test_that_can_connect = function (test) {
    mongoose.connect("mongodb://localhost/photohosting");

    User.find(function (err, data) {
        test.notEqual(null, data);
        mongoose.disconnect();
        test.done();
    });
};

