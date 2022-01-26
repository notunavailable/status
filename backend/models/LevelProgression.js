const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LevelProgression = new Schema({
    level: Number,
    requiredEXP: Number
})

module.exports = mongoose.model('LevelProgression', LevelProgression)