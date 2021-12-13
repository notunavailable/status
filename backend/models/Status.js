const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Status = new Schema({
    name: String,
    attributes: Array,
    skills: Array,
})

module.exports = mongoose.model('Status', Status)