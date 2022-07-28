const mongoose = require('mongoose');

const tournamentSchema = mongoose.Schema({
    year: {
        type: Number,
        required: true
    },
    draw: [String],
    pictures: [String]

});

exports.Tournament = mongoose.model('Tournament',tournamentSchema);