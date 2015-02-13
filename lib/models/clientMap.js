var mongoose = require('mongoose');

var clientStudioMapSchema = mongoose.Schema({
    clientId: String,
    studioId: String
});

var ClientMap = mongoose.model('ClientMap', clientStudioMapSchema);

exports.name = 'ClientMap';
exports.model = ClientMap;