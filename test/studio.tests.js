var Studio = require('../lib/index').Studio;
var mongoose = require('mongoose');

exports.TestThatHasCustomDomainWorksWhenHasDomain = function (test) {
    var studio = new Studio({
        customDomain: 'example.com'
    });

    test.ok(studio.HasCustomDomain());
    test.done();
};

exports.TestThatCustomDomainWorksWhenNoDomain = function (test) {
    var studio = new Studio({});

    test.equal(false, studio.HasCustomDomain());
    test.done();
};