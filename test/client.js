var model = require('../lib/index');

exports.check_that_user_is_there = function (test) {
    test.notEqual(model.Client, undefined);
    test.notEqual(model.Client, null);
    mongoose.disconnect();
    
    test.done();
};