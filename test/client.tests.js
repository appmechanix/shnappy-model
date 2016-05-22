var model = require('../lib/index');

exports.check_that_user_is_there = function (test) {
    test.notEqual(model.Client, undefined);
    test.notEqual(model.Client, null);

    test.done();
};

exports.check_that_public_isnt_set_by_default = function (test) {
    var client = new model.Client();

    test.equal(false, client.isPublic);

    test.done();
};

exports.check_that_non_expired_client_is_valid = function (test) {
    var client = new model.Client();
    test.equal(false, client.HasExpired());

    test.done();
};

exports.check_that_half_saved_expiry_is_valid = function (test) {
    var client = new model.Client();
    client.expires = true;
    
    test.equal(false, client.HasExpired());

    test.done();
};

exports.check_that_expired_client_is_invalid = function (test) {
    var client = new model.Client();
    var d = new Date();
    d.setDate(d.getDate() - 5);

    client.expires = true;
    client.expiresOn = d;

    test.equal(true, client.HasExpired());

    test.done();
};