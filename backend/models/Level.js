const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Level = new Schema({
    currentLevel: Number,
    exp: Number
})

module.exports = mongoose.model('Level', Level)