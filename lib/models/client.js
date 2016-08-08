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
    allowFavouriteSharing: {type: Boolean, default: true},
    contact: {
        name: String,
        email: String,
        message: String
    },
    coverName: String,
    layoutStyle: {type: String, default: ''},
    imagesPerRow: {type: Number, default: 3},
    isPublic: {type: Boolean, default: false},
    showCreatedOnDate: {type: Boolean, default: true},
    expires: {type: Boolean, default: false},
    expiresOn: {type: Date, default: null},
    imagesPerPage: {type: Number, default: 100},
    allowClientsToShare: {type: Boolean, default: true},
    coverDesign: {type: String, default: 'standard'}
});

clientSchema.methods.HasExpired = function () {
    if (this.expires && this.expiresOn) {
        if (new Date() > this.expiresOn) {
            return true;
        }
    }

    return false;
};

clientSchema.methods.CoverDesignCSS = function () {
    return 'cover--' + this.coverDesign;
};

var Client = mongoose.model('Client', clientSchema);

exports.name = 'Client';
exports.model = Client;