var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    studioId: String,
    clientId: String,
    userHash: String,
    userEmail: String,
    userName: String,
    imagePath: String,
    album: String,
    comment: String,
    emailOnReply: Boolean,
    added: {type: Date, default: Date.now}
});

var Comment = mongoose.model('Comment', commentSchema);

exports.name = 'Comment';
exports.model = Comment;