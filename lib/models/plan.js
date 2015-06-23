var mongoose = require('mongoose');

var planSchema = mongoose.Schema({
    created: {type: Date, default: Date.now},
    publicId: String,
    isPublic: Boolean,
    price: Number,
    name: String,
    paypalId: String,
    billingStatus: {type: String, default: 'ACTIVE'},
    settings: {
        clients: Number,
        showPoweredBy: Boolean
    }
});

var Plan = mongoose.model('Plan', planSchema);

exports.name = 'Plan';
exports.model = Plan;
