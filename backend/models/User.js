const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new User({
    email: String,
    username: String,
    status: String
})

module.exports = mongoose.model('User', User);