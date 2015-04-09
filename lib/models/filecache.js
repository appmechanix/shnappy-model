var mongoose = require('mongoose');

var fileCacheSchema = mongoose.Schema({
    created: {type: Date, default: Date.now},
    studioId: String,
    clientId: String,
    pathHash: String,
    metaData: Object,
    imageWidth: Number,
    imageHeight: Number,
    imageRatio: Number
});

var FileCache = mongoose.model('FileCache', fileCacheSchema);

exports.name = 'FileCache';
exports.model = FileCache;