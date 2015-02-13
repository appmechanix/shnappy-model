var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
    studioId: String,
    clientId: String,
    name: String,
    urlSlug: String,
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
    shortCode: String,
    createdBy: String,
    markup: String,
    css: String,
    title: String
});

var Story = mongoose.model('Story', storySchema);

exports.name = 'Story';
exports.model = Story;