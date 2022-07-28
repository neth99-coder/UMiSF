const mongoose = require('mongoose');

const ageGroupSchema = mongoose.Schema({
    name: {
        type: String
    }
});

exports.Age_Group = mongoose.model('Age_Group',ageGroupSchema);