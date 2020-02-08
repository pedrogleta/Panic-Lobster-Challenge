var mongoose = require('mongoose');

var stateSchema = new mongoose.Schema({
    UF: String,
    Estado: String
});

module.exports = mongoose.model("Refstate", stateSchema);