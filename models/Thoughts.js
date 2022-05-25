const mongoose = require('mongoose');
const reactions = require('./Reaction.js')

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    date: {},
    username: { type: String, required: true },
    reactions: [
        reactions
    ]
},
{
    toJSON: {
        virtuals: true,
    }
});

thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return `${this.reactions.length}`
    });

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;