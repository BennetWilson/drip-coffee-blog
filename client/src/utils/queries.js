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

export const QUERY_GETUSER = gql`
query getUser {
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