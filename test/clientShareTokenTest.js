var mongoose = require('mongoose');
var ClientShareToken = require('../lib/index').ClientShareToken;

exports.check_that_uuid_is_set_on_token_insert = function (test) {
    mongoose.connect("mongodb://localhost/photohosting-test");

    var token = new ClientShareToken({
        studioId: 'TEST',
        clientId: 'TEST'
    });

    token.save(function (err, data) {
        test.equal('TEST', data.studioId);
        test.notEqual(null, data.token);
        test.notEqual(undefined, data.token);

        mongoose.disconnect();
        test.done();
    });
};

exports.check_that_is_first_login_is_true_on_first_login = function (test) {
    mongoose.connect("mongodb://localhost/photohosting-test");

    var token = new ClientShareToken({
        studioId: 'TEST',
        clientId: 'TEST'
    });

    token.save(function (err, data) {
        test.equal(true, data.IsFirstLogin());

        mongoose.disconnect();
        test.done();
    });
};


exports.check_that_is_first_login_is_true_on_first_login = function (test) {
    mongoose.connect("mongodb://localhost/photohosting-test");

    var token = new ClientShareToken({
        studioId: 'TEST',
        clientId: 'TEST',
        timesUsed: 10
    });

    token.save(function (err, data) {
        test.equal(false, data.IsFirstLogin());

        mongoose.disconnect();
        test.done();
    });
};