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
    },
    galleries: [String]
});

contactSchema.methods.EmailHash = function () {
    return md5(this.email);
};

contactSchema.methods.FullName = function () {
    if (this.firstName && this.lastName) {
        return this.firstName + ' ' + this.lastName;
    } else if (this.firstName) {
        return this.firstName;
    } else {
        return undefined;
    }
};

var Contact = mongoose.model('Contact', contactSchema);

exports.name = 'Contact';
exports.model = Contact;