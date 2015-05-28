var mongoose = require('mongoose');

var billingSchema = mongoose.Schema({
    created: {type: Date, default: Date.now},
    nextBillingDate: Date,
    createdBy: String,
    planId: String,
    contact: {
        name: String,
        address: String,
        country: String,
        postcode: String,
        phone: String
    },
    amount: Number,
    currency: String
});

var Billing = mongoose.model('Billing', billingSchema);

exports.name = 'Billing';
exports.model = Billing;
