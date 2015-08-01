var mongoose = require('mongoose');
var md5 = require('md5');

var contactSchema = mongoose.Schema({
    studioId: String,
    hash: String,
    created: {type: Date, default: Date.now},
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    address: String,
    message: String,
    notifications: {
        newPhotos: {type: Boolean, default: true}
    }
});

contactSchema.methods.EmailHash = function () {
    return md5(this.email);
};

var Contact = mongoose.model('Contact', contactSchema);

exports.name = 'Contact';
exports.model = Contact;