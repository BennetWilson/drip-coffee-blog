import React, { useState } from "react";
import { QUERY_SINGLE_POST } from "../../utils/queries";

import { REMOVE_POST, UPDATE_POST } from "../../utils/mutations";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import "./singlepost.css";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import Image from "../../Assets/coffee-images/latte.jpeg";

export default function SinglePost() {
  const { postId } = useParams();
  console.log(postId);
  const [updatePost] = useMutation(UPDATE_POST);

  // TODO Correct and Test -Update Post
  // const [cardData, setCardData] = useState({});
  const [updatedPost, setUpdatedPost] = useState({
    _id: "",
    title: "",
    desc: "",
    photo: "",
  });

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: postId },
  });

  // TODO Correct and Test -Update Post
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUpdatedPost({ ...updatedPost, [name]: value });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updatePost({
        variables: { ...updatedPost },
      });

      console.log(data)
    } catch (err) {}
  };

  const [removePost, { error }] = useMutation(REMOVE_POST);

  const handleDelete = async (event) => {
    const remove = await removePost({ variables: { postId: postId } });
    window.location.href='/'
  };

  const post = data?.singlePost || {};
  console.log(post);
  console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }
  

  // setCardData(post);

  return (
    <>
      <div className="singlePost my-3">
        <div className="singlePostWrapper ">
          <div className='imageAlign'>
          <img src={post.photo} alt="" className="singlePostImg" />
          </div>
          <h1 className="singlePostTitle card-header bg-dark text-light p-2 m-0">
            {post.title}
            <div className="singlePostEdit">
              <a href={`/update/${postId}`}>
              <i
                className="singlePostIcon fa-solid fa-pen-to-square"
             
              ></i>
              </a>
              <i
                className="singlePostIcon fa-solid fa-trash"
                onClick={handleDelete}
              ></i>
            </div>
          </h1>
          <div className="singlePostInfo card-header bg-dark text-light p-2 m-0">
            <span className="singlePostAuthor">
              Author: <b>{post.username}</b>
            </span>
            <span className="singlePostDate">{post.createdAt} </span>
          </div>
          <div className="bg-light py-4">
            <blockquote
              className="p-4 paragraph"
              style={{
                fontSize: "1.5rem",
                fontStyle: "",
                border: "1px dotted #1a1a1a",
                lineHeight: "1.5",
              }}
            >
              {post.desc}
            </blockquote>
          </div>
          {/* <p className='singlePostDescription bg-light py-4'>{post.desc}</p> */}
        </div>

        <div className="my-5">
          <CommentList comments={post.comments} />
        </div>
        <div
          className="m-3 p-4 card-header bg-secondary text-light p-2 m-0"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <CommentForm postId={postId} />
        </div>
      </div>
    </>
  );
}
