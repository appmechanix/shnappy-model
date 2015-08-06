var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudioSchema = new Schema({
    name: String,
    created: String,
    shortCode: String,
    dropboxFolder: {type: String, default: ''},
    createdBy: String,
    domain: String,
    customDomain: {type: String, default: null},
    facebook: {type: String, default: null},
    twitter: {type: String, default: null},
    website: {type: String, default: null},
    email: {type: String, default: null},
    colour: {type: String, default: '#ea2378'},
    textColour: {type: String, default: '#ffffff'},
    watermarkPosition: {type: String, default: ''},
    useWatermark: {type: Boolean, default: true},
    allowDownload: {type: Boolean, default: false},
    showOnStudioPage: {type: Boolean, default: true},
    enableStudioPage: {type: Boolean, default: true},
    googleAnalyticsCode: {type: String, default: null},
    active: Boolean,
    logoPath: String,
    studioPageLayout: {type: String, default: 'TEXT'},
    clientLayout: {type: String, default: 'COVERGRID'},
    logoAlign: {type: String, default: 'CENTER'},
    wasBeta: {type: Boolean, default: false},
    billingId: String,
    shareEmailGreeting: {type: String, default: 'Hey'}
});

StudioSchema.methods.HasCustomDomain = function () {
    return !(this.customDomain == undefined || this.customDomain === '' || this.customDomain === null);
};

mongoose.model('Studio', StudioSchema);

var Studio = mongoose.model('Studio');

exports.name = 'Studio';
exports.model = Studio;