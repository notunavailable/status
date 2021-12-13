const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Level = new Schema({
    statusID: String,
    attatchedInfo: String,
    currentLevel: Number,
    exp: Array,
})

module.exports = mongoose.model('Level', Level)