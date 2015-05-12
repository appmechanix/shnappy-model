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