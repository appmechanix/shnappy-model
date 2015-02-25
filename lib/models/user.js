var mongoose = require('mongoose');

// SCHEMAS
var userSchema = mongoose.Schema({
    userId: String,
    name: String,
    email: String,
    country: String,
    accessToken: String,
    accessSecret: String,
    betaCode: String,
    isActive: Boolean,
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
    lastSeen: {type: Date, default: Date.now},
    dropboxDelta: String,
    apiKey: String,
    sentConnectionWarning: {type: Boolean, default: false},
    setup: {
        settings: {type: Boolean, default: false},
        createdClient: {type: Boolean, default: false},
        sharedWithClient: {type: Boolean, default: false}
    }
});

var User = mongoose.model('User', userSchema);

exports.name = 'User';
exports.model = User;
