const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getUsers: async () => {
      return User.find().populate("posts");
    },

    getUser: async (parent, { username }) => {
      return User.findOne({ username }).populate("posts");
    },

    posts: async () => {
      console.log("get post");
      return Post.find();
    },

    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-v__ -password"
        );
        return userData;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({
          username: context.user.username,
          title: args.title,
          desc: args.desc,
          photo: args.photo,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } },
          { new: true }
        );
        return post;
      }

      throw new AuthenticationError("Incorrect credentials");
      //   let catArr = [];

      //   for (const category of categories) {
      //     catArr.push(category);
      //   }

      //   const post = await Post.create({
      //     title,
      //     desc,
      //     photo,
      //     $addToSet: { categories: catArr },

      //   });
      //   return post;
    },

    // TODO check addComment and make sure its correct and relating to typeDefs
    addComment: async (parent, { postId, commentText }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // TODO check removePost and make sure its correct and relating to typeDefs
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
