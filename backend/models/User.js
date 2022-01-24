const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email: String,
    admin: Boolean,
    username: String,
    password: String,
    status: {
        name: String,
        level: String,
        attributes: Array,
        skills: Array
    }
})

module.exports = mongoose.model('User', User);