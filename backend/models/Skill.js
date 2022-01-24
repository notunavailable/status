const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Skill = new Schema({
    name: String,
    description: String,
    affectedAttributes: Array,
    milestones: Array
})

module.exports = mongoose.model('Skill', Skill);