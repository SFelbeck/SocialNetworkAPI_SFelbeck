const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    //new objectID?
    reactionBody: { type: String, required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: {}
    //date?
})

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;