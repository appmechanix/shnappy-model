var mongoose = require('mongoose');

var tokenSchema = mongoose.Schema({
    studioShortCode: String,
    clientShortCode: String,
    created: Date,
    emailAddress: String
});

var Token = mongoose.model('Token', tokenSchema);

exports.name = 'Token';
exports.model = Token;