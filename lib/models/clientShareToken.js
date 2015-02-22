var mongoose = require('mongoose');
var uuid = require('node-uuid');

var clientShareTokenSchema = mongoose.Schema({
    studioId: String,
    clientId: String,
    created: {type: Date, default: Date.now},
    expires: Date,
    contactName: String,
    contactEmail: String,
    token: {type: String, default: uuid.v4}
});

var ClientShareToken = mongoose.model('ClientShareToken', clientShareTokenSchema);

exports.name = 'ClientShareToken';
exports.model = ClientShareToken;