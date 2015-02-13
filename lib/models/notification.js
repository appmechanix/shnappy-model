var mongoose = require('mongoose');

var notificationSchema = mongoose.Schema({
    studioId: String,
    clientId: String,
    userHash: String,
    imagePath: String, // URL of photo activity relates to
    objectId: String, // The ID of the object
    text: String,
    extra: String,
    url: String,
    album: String,
    postType: String,
    added: {type: Date, default: Date.now}
});

var Notification = mongoose.model('Notification', notificationSchema);

exports.name = 'Notification';
exports.model = Notification;