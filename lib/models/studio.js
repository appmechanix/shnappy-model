var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudioSchema = new Schema({
    name: String,
    created: String,
    shortCode: String,
    dropboxFolder: String,
    createdBy: String,
    domain: String,
    customDomain: {type: String, default: null},
    facebook: String,
    twitter: String,
    website: String,
    email: String,
    colour: {type: String, default: ''},
    textColour: {type: String, default: ''},
    watermarkPosition: String,
    useWatermark: {type: Boolean, default: true},
    allowDownload: {type: Boolean, default: false},
    showOnStudioPage: {type: Boolean, default: true},
    enableStudioPage: {type: Boolean, default: true},
    googleAnalyticsCode: String,
    active: Boolean,
    logoPath: String,
    studioPageLayout: {type: String, default: 'TEXT'},
    clientLayout: {type: String, default: 'COVERGRID'},
    logoAlign: {type: String, default: 'CENTER'},
    planCode: {type: String, default: 'FREE1'}
});

StudioSchema.methods.HasCustomDomain = function () {
    return !(this.customDomain == undefined || this.customDomain === '' || this.customDomain === null);
};

mongoose.model('Studio', StudioSchema);

var Studio = mongoose.model('Studio');

exports.name = 'Studio';
exports.model = Studio;