const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstname: String,
    lastname: String,
    age: Number
});

module.exports = mongoose.model('people',personSchema);


