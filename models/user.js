var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    birthdate: String,
    cpf: String,
    state: String,
    city: String,
    github: String
});

module.exports = mongoose.model("User", userSchema);