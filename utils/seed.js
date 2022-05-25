//empty for now
const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const { genRandomIndex, getRandomUserName, getRandomEmail, getRandomThought, getRandomReaction } = require('./data');

//import functions for seed data

console.time('seeding');

connection.once('open', async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({});

    const users = [];
    const thoughts =[];
    const reactions = [];

    for (let i = 0; i < 10; i++){
        const username = getRandomUserName();
        const newUser = {
            username: username,
        };
        users.push(newUser)
    }

    const makeThought = (text) => {
        thougths.push({
//idk what to put here
        })
    }
})



// await Reaction.collection.insertMany(reactions);

// await Thought.collection.insertMany(thoughts);