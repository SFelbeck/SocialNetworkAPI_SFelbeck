//empty for now
const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const { genRandomIndex, getRandomUserName } = require('./data');

//import functions for seed data

console.time('seeding');

connection.once('open', async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({});

    const users = [];
    const thoughts =[];
    const reactions = [];

    const makeThought = (text) => {
        thougths.push({
//idk what to put here
        })
    }
})