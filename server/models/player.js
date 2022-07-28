const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    b_day: {
        type: Date,
        required: true,
    },
    nic: {
        type: String
    },
    mobile_number: {
        type: String,
        required: true
    },
    telephone_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    school_club: {
        type: String,
        required: true
    },
    gender: {
        type: Boolean,
        required: true
    },
    postal_address: {
        type: String,
        required: true
    },
    payment_method: {
        type: String,
        required: true
    },
    isPaid: {
        type: Boolean,
        required: true
    },
    payment_slip: {
        type: String
    },
    match_types: [{
        type_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Match_Type',
            required: true
        },
        age_group: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Age_Group',
            required: true
        },
        player2_first_name: {
            type: String
        },
        player2_last_name: {
            type: String
        },
        player2_nic: {
            type: String
        },
        player2_b_day: {
            type: Date
        },
    }]
});

exports.Player = mongoose.model('Player',playerSchema);