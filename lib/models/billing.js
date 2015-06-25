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
        phone: String,
        email: String
    },
    amount: Number,
    currency: String,
    status: String,
    paymentType: String
});

/**
 * Determines whether or not the status is a valid one we can use
 */
billingSchema.methods.IsActive = function () {
    switch (this.status) {
        case "TRIAL":
        case "ACTIVE":
        case "FREE":
            return true;
        default:
            return false;
    }
};

var Billing = mongoose.model('Billing', billingSchema);

exports.name = 'Billing';
exports.model = Billing;
