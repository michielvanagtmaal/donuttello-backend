const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const donutSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: String,
    completed: Boolean
});
const Donut = mongoose.model('Donut', donutSchema);

module.exports = Donut;