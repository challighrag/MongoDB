const mongoose = require("mongoose");

const student = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Student', student);