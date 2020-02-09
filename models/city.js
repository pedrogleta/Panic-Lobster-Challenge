var mongoose = require('mongoose');

var citySchema = new mongoose.Schema({
    UF: String,
    Município: String
});

module.exports = mongoose.model("Refcity", citySchema);