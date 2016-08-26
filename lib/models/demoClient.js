var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
    userId: String,
    name: String,
    created: String,
    shortCode: String,
    dropboxFolder: String,
    createdBy: String,
    password: String,
    url: String,
    useWatermark: {type: Boolean, default: false},
    allowDownload: {type: Boolean, default: true},
    showOnStudioPage: {type: Boolean, default: true},
    allowFavouriteSharing: {type: Boolean, default: true},
    contact: {
        name: String,
        email: String,
        message: String
    },
    coverName: String,
    layoutStyle: {type: String, default: ''},
    imagesPerRow: {type: Number, default: 3},
    isPublic: {type: Boolean, default: true},
    showCreatedOnDate: {type: Boolean, default: true},
    expires: {type: Boolean, default: false},
    expiresOn: {type: Date, default: null},
    imagesPerPage: {type: Number, default: 100},
    allowClientsToShare: {type: Boolean, default: true},
    coverDesign: {type: String, default: 'standard'}
});

var DemoClient = mongoose.model('DemoClient', clientSchema);

exports.name = 'DemoClient';
exports.model = DemoClient;