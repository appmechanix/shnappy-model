var mongoose = require('mongoose');

var billingHistorySchema = mongoose.Schema({
    created: {type: Date, default: Date.now},
    studioId: String,
    createdById: String,
    createdByName: String,
    planId: String,
    price: Number,
    status: String,
    message: String
});

var BillingHistory = mongoose.model('BillingHistory', billingHistorySchema);

exports.name = 'BillingHistory';
exports.model = BillingHistory;
