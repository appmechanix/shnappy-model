var mongoose = require('mongoose');

var fileCacheSchema = mongoose.Schema({
    created: {type: Date, default: Date.now},
    studioId: String,
    pathHash: String,
    metaData: Object
});

var FileCache = mongoose.model('FileCache', fileCacheSchema);

exports.name = 'FileCache';
exports.model = FileCache;