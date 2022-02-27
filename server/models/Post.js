const mongoose = require("mongoose");
const dateFormat =  require('../utils/dateFormat')


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
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
      {
        commentText: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280,
        },
        commentAuthor: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (timestamp) => dateFormat(timestamp),
        },
      },
    ],
    categories: [{
      category: {
        type: String
      },
    }]
  },
);


const Post = mongoose.model('Post', postSchema);
module.exports = Post;

