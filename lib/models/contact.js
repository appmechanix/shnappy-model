var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    studioId: String,
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

var Contact = mongoose.model('Contact', contactSchema);

exports.name = 'Contact';
exports.model = Contact;