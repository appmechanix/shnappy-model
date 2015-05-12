var mongoose = require('mongoose');

var billingSchema = mongoose.Schema({
    created: {type: Date, default: Date.now},
    nextBillingDate: Date,
    createdBy: String,
    planId: String,
    settings: {
        clients: Number,
        showPoweredBy: Boolean
    },
    history: Array
});

var Billing = mongoose.model('Billing', billingSchema);

exports.name = 'Billing';
exports.model = Billing;
