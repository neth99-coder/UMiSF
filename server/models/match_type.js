const mongoose = require('mongoose');

const matchTypeSchema = mongoose.Schema({
    name: {
        type: String
    }
});

exports.Match_Type = mongoose.model('Match_Type',matchTypeSchema);