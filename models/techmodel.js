var mongoose = require('mongoose');
var obj = new mongoose.Schema({
    TechName: { type: String },
    Des: { type: String },
    Logo: { type: String },
    Video: { type: String },

});
module.exports = mongoose.model('TechCollection', obj);