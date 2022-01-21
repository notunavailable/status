const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Skill = new Schema({
    name: String,
    description: String,
    affectedAttributes: Array,
    milestones: {
        name: String,
        level: Number,
        description: String
    }
})

module.exports = mongoose.model('Skill', Skill);