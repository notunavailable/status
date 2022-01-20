const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LevelProgression = new Schema({
    name: Number,
    nextEXP: Number
})

module.exports = mongoose.model('LevelProgression', LevelProgression)