import React, { useState } from "react";
import { QUERY_SINGLE_POST } from "../../utils/queries";
import { REMOVE_POST, UPDATE_POST } from "../../utils/mutations";
import { useParams,  } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import "./singlepost.css";

import Image from "../../Assets/coffee-images/latte.jpeg";


export default function UpdatePost() {
  const { postId } = useParams();
  console.log(postId);
  const [updatePost] = useMutation(UPDATE_POST);

  // TODO Correct and Test -Update Post
  // const [cardData, setCardData] = useState({});
  const [updatedPost, setUpdatedPost] = useState({
    _id: postId,
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

      console.log(updatedPost);
window.location.replace('/')
    } catch (err) {}
  };

  //   const [removePost, { error }] = useMutation(REMOVE_POST);

  //   const handleDelete = async (event) => {
  //     const remove = await removePost({ variables: { postId: postId } });
  //   };

  const post = data?.singlePost || {};
  //   console.log(post);
  //   console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }

  // setCardData(post);

  return (
    <>
      <div className="singlePost my-3">
        <div className="singlePostWrapper ">
          {/* post.photo needs ../ backticks like line 59 write.jsx */}
          <img src={Image} alt="" className="singlePostImg" />
          <h1 className="singlePostTitle card-header bg-dark text-light p-2 m-0">
            Update your post
          </h1>
          <form onSubmit={handleUpdate}>
            <div>
              <label>Title</label>
              <input
                type="text"
                className="title"
                placeholder={post.title}
                value={updatedPost.title}
                onChange={handleInputChange}
                name="title"
              />
            </div>
            <div>
              <label>Content</label>
                <textarea
                name="desc"
                placeholder={post.desc}
                value={updatedPost.desc}
                onChange={handleInputChange}
             
              ></textarea>
            </div>
            <button>Update</button>
          </form>
        </div>
      </div>
    </>
  );
}
