const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true, trim: true },
        email: { type: String, required: true, unique: true, validate: [ isEmail, 'invalid email']},
        thoughts: Number,
        friends: [{
            type: Number
        }]
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);

userSchema
    .virtual('friendCount')
    .get(function() {
        return `${this.friends}`
    })

    const User = mongoose.model('user', userSchema);

    module.exports = User;