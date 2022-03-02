const db = require('../connection/config');
const { User, Post } = require('../models');
const userSeed = require('./userSeeds.json');
const postSeed = require('./postSeeds.json');


db.once('open', async () => {
  await User.deleteMany({});
  await User.insertMany(userSeed);
  await Post.deleteMany({});
  await Post.insertMany(postSeed)
  console.log('ApplicationData was seeded!');
  process.exit(0);
});