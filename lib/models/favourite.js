var mongoose = require('mongoose');

var favouriteSchema = mongoose.Schema({
    studioId: String,
    clientId: String,
    userHash: String,
    userEmail: String,
    userName: String,
    imagePath: String,
    album: String,
    added: {type: Date, default: Date.now}
});

var Favourite = mongoose.model('Favourite', favouriteSchema);

exports.name = 'Favourite';
exports.model = Favourite;