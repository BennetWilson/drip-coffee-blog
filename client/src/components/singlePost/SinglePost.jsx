import React, { useState } from "react";
import { QUERY_SINGLE_POST } from "../../utils/queries";
import { REMOVE_POST } from "../../utils/mutations";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import "./singlepost.css";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import Image from "../../Assets/coffee-images/latte.jpeg"

export default function SinglePost() {
  const { postId } = useParams();
  console.log(postId);
  //   const [cardData, setCardData] = useState({});
  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: postId },
  });

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
          {/* post.photo needs ../ backticks like line 59 write.jsx */}
          <img src={post.photo} alt="" className="singlePostImg" />
          <h1 className="singlePostTitle card-header bg-dark text-light p-2 m-0">
            {post.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
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