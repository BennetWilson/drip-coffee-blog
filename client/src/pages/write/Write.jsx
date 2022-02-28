import React, { useState } from "react";
import "./write.css";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Write = (props) => {
  const [formState, setFormState] = useState({ title: "", desc: "", photo: "" });
  const [imageSrc, setImageSrc] = useState('Assets/coffee-images/coffee-cup.png')
  const [write] = useMutation(ADD_POST);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleDropdownChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    setImageSrc(
      value
    )
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await write({
        variables: { ...formState },
      });
      setFormState({
        title: "",
        desc: "",
        photo:""
      });
    } catch (e) {
      console.error(e);
    }

    
  };

  return (
    <div className="write">
      {/* add coffee select images */}
      <label for="coffee-images">Choose an image:</label>

<select onChange={handleDropdownChange} 
name="coffee-images" id="coffee">
  <option value="../Assets/coffee-images">Coffee Cup</option>
  <option value="saab">Coffee Beans</option>
  <option value="mercedes">Coffee maker</option>
  <option value="audi">Audi</option>
</select>
      <img className="writeImg" src={`../../${imageSrc}`} alt="" />
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
            value={formState.title}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={handleChange}
            name='desc'
            value={formState.desc}
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
