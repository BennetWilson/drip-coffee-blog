import React, { useState } from "react";
import "./write.css";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Write = (props) => {
  const [formState, setFormState] = useState({ title: "", desc: "", photo: "" });
  const [write] = useMutation(ADD_POST);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await write({
        variables: { ...formState },
      });
      // console.log(data, "this is data consolelog")
      // Auth.loggedIn(data.loggedIn.token);

      // auth?

    } catch (e) {
      console.error(e);
    }

    setFormState({
      title: "",
      desc: "",
      photo:""
    });
  };

  return (
    <div className="write">
      <img className="writeImg" src="https://via.placeholder.com/250" alt="" />
      <form className="writeForm" onSubmit={handleFormSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleChange} name='photo'/>
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={handleChange}
            name='title'
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={handleChange}
            name='desc'
          ></textarea>
          <button
            className="writeSubmit"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
