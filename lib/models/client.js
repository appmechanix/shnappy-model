var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
    studioId: String,
    name: String,
    created: String,
    shortCode: String,
    dropboxFolder: String,
    createdBy: String,
    password: String,
    url: String,
    useWatermark: {type: Boolean, default: true},
    allowDownload: {type: Boolean, default: false},
    showOnStudioPage: {type: Boolean, default: true},
    contact: {
        name: String,
        email: String,
        message: String
    },
    coverName: String,
    layoutStyle: {type: String, default: ''},
    imagesPerRow: {type: Number, default: 3},
    isPublic: {type: Boolean, default: false}
});

var Client = mongoose.model('Client', clientSchema);

exports.name = 'Client';
exports.model = Client;