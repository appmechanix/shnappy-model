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
    isAdmin: Boolean,
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
    lastSeen: {type: Date, default: Date.now},
    dropboxDelta: String,
    apiKey: String,
    sentConnectionWarning: {type: Boolean, default: false},
    conversionTracking: {
        facebook: {type: Boolean, default: false},
        getworm: {type: Boolean, default: false}
    },
    emails: {
        sendCompanyEmails: {type: Boolean, default: true},
        sendActivityEmails: {type: Boolean, default: true}
    },
    setup: {
        settings: {type: Boolean, default: false},
        createdClient: {type: Boolean, default: false},
        sharedWithClient: {type: Boolean, default: false}
    }
});

var User = mongoose.model('User', userSchema);

exports.name = 'User';
exports.model = User;
