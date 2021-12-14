const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Attribute = new Schema({
    name: String,
    description: String,
    milestones: Array
})

module.exports = mongoose.model('Attribute', Attribute);