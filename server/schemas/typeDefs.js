const {gql} = require('apollo-server-express');


const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        posts: [Post]
    }

    type Post {
        _id: ID
        username: String
        title: String
        desc: String
        photo: String
       
    }

    type Category {
        name: String!
    }

    type Auth {
        token: ID!
        user: User
      }

      input UserInput {
        title: String!
        desc: String!
        photo: String
        categories: [String]
      }

    type Query {
        getUsers: [User]
        posts: [Post]
        getUser(username: String): User
        me: User
    }

    type Mutation {
        addUser(username: String!, password: String!, email: String!): Auth
        login(email: String!, password: String!): Auth
        addPost(title: String, desc: String, photo: String): Post
    }
`;

module.exports = typeDefs;