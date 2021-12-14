const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email: String,
    username: String,
    status: {
        name: String,
        attributes: Array,
        skills: Array,
    }
})

module.exports = mongoose.model('User', User);