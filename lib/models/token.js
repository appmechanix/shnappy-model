var mongoose = require('mongoose');

var tokenSchema = mongoose.Schema({
    studioShortCode: String,
    clientShortCode: String,
    created: Date,
    emailAddress: String
});

var Token = mongoose.model('Token', tokenSchema);/**
 * Created by Daniel on 14/02/15.
 */

exports.name = 'Token';
exports.model = Token;