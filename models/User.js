const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true, trim: true },
        email: { type: String, required: true, unique: true, validate: [ isEmail, 'invalid email']},
        thoughts: Number,
        friends: Number
    }
)