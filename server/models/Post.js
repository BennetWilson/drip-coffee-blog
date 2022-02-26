const mongoose = require("mongoose");


const categorySchema = new mongoose.Schema(
    {
     name: {
         type: String,
         required: true
     }
    },
  );

const postSchema = new mongoose.Schema(
  {
    username: {
        type: String, 
    },
    title: {
      type: String,

    },
    desc: {
      type: String,

    },
    photo: {
      type: String,
     
    },
    // categories: [categorySchema]
  },
);


const Post = mongoose.model('Post', postSchema);
module.exports = Post;

