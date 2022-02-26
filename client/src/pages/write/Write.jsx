import React, { useState } from "react";
import "./write.css";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Write = (props) => {
  const [formState, setFormState] = useState({ title: '', desc: '' });
  const [write, { error, data }] = useMutation(ADD_POST);

  const handleChange = (event) => {
    const { }

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

      // auth?
    } catch (e) {
      console.error(e);
    }

    setFormState({
      title: '',
      desc: '',
    });
  };
    

  return (
    <div className="write">
      <img className="writeImg" src="https://via.placeholder.com/250" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>

        <form onSubmit={handleFormSubmit} className="writeForm">
           <label>Title</label>
           <input type="text" name='title' value={formState.title} onChange={handleChange} className="writeInput" placeholder="Enter your title..."/>
           <label>Thoughts</label>
           <input type="text" name="desc" value={formState.desc} onChange={handleChange} className="writeInput" placeholder="Tell your story..."/>
           <button type="submit" className="writeSubmit">Publish</button>
       </form>

        
      </form>
    </div>
  );
};

export default Write;