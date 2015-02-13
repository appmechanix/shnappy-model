var mongoose = require('mongoose');

var analyticsSchema = mongoose.Schema({
    studioId: String,
    clientId: String,
    logType: String,
    added: {type: Date, default: Date.now}
});

var HitLog = mongoose.model('AnalyticsLogs', analyticsSchema);

exports.name = 'HitLog';
exports.model = HitLog;