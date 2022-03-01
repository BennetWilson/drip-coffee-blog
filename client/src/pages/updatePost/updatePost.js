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
    photo: "",
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
      <div className="singlePost my-3">
        <div className="singlePostWrapper ">
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
