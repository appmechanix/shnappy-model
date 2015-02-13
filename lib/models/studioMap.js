var mongoose = require('mongoose');

var studioUserMapSchema = mongoose.Schema({
    userId: String,
    studioId: String
});

var StudioMap = mongoose.model('StudioMap', studioUserMapSchema);

exports.name = 'StudioMap';
exports.model = StudioMap;