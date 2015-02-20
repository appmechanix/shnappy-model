var mongoose = require('mongoose');

var inviteSchema = mongoose.Schema({
    name: String,
    email: String,
    job: String,
    used: Boolean,
    sent: Boolean,
    sentOn: Date,
    boostKey: String
});

var Invite = mongoose.model('Invite', inviteSchema);

exports.name = 'Invite';
exports.model = Invite;