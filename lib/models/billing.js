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

/**
 * Figures out if trial has expired or not
 * @returns {boolean}
 * @constructor
 */
billingSchema.methods.HasExpired = function () {
    return (this.status === "TRIAL" && (new Date() > this.nextBillingDate));
};

/**
 * Gets the number of days left in a trial
 * @returns {number}
 * @constructor
 */
billingSchema.methods.DaysLeftInTrial = function () {
    if (this.status !== 'TRIAL') {
        return null;
    }

    var now = new Date();
    var expires = new Date(this.nextBillingDate);
    return Math.floor((expires - now) / (1000 * 60 * 60 * 24));
};

var Billing = mongoose.model('Billing', billingSchema);

exports.name = 'Billing';
exports.model = Billing;
