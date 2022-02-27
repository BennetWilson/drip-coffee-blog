import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        username
        title
        desc
        photo
      }
    }
  }
`;

export const QUERY_GET_USERS = gql`
query getUsers($username: String){
  getUsers(username:$username){
    _id
    posts{
      _id
      title
      desc
      photo
    }
  }
}
`;

export const QUERY_GET_USER = gql`
query getUser($username: String) {
  getUser(username:$username){
    _id
    username
    email
    posts{
      _id
      title
      desc
      photo
    }
  }
}
`;

export const QUERY_SINGLE_POST = gql`
query singlePost($postId: ID!) {
  singlePost(postId: $postId) {
    _id
    username
    title
    desc
    photo
    createdAt
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`;

export const QUERY_POST = gql`
query posts{
  posts{
    _id
    username
    title
    desc
    photo
    createdAt
  
  }
}
`;