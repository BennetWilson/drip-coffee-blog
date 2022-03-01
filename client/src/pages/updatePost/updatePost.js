import React, { useState } from "react";
import { QUERY_SINGLE_POST } from "../../utils/queries";
import { UPDATE_POST } from "../../utils/mutations";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import "./updatePost.css";

import Image from "../../Assets/coffee-images/latte.jpeg";

export default function UpdatePost() {
  const { postId } = useParams();
  console.log(postId);
  const [updatePost] = useMutation(UPDATE_POST);

  const [updatedPost, setUpdatedPost] = useState({
    _id: postId,
    title: "",
    desc: "",
    // photo: "",
  });

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: postId },
  });

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
      window.location.replace("/");
    } catch (err) {}
  };

  const post = data?.singlePost || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="updatePost my-3">
        <div className="updatePostWrapper">
          <img src={post.photo}  alt="" className="singlePostImg" />
          {/* { updatedPost.photo ? <img src={updatedPost.photo} alt="" className="singlePostImg" /> 
            : <img src={post.photo} alt="" className="singlePostImg" />} */}
          <h1 className="updatePostTitle card-header bg-secondary text-light p-2 m-0">
            UPDATE YOUR POST
          </h1>
          <form className="updateForm" onSubmit={handleUpdate}>
            <div className="Sec">
              <label>Title</label>
              <div>
                <input
                  type="text"
                  className="title"
                  placeholder={post.title}
                  value={updatedPost.title}
                  onChange={handleInputChange}
                  name="title"
                />
              </div>
            </div>
            <div className="Sec1">
              <label>Content</label>
              <div>
                <textarea
                  className="content"
                  name="desc"
                  placeholder={post.desc}
                  value={updatedPost.desc}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
