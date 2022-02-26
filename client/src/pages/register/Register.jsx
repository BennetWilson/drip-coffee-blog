import "./register.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';



const Signup = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [addUser, { error, data }] = useMutation(ADD_USER);
    
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
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };
      
    return (
    <div className="register">
        <span className="registerTitle">Register</span>
        
       <form className="registerForm" onSubmit={handleFormSubmit}>
           <label> Username</label>

           <input type="text" name='username' className="registerInput" placeholder="Enter your username..." value={formState.name} onChange={handleChange}/>

           <label> Email</label>
           <input type="email" name='email' className="registerInput" placeholder="Enter your email..." value={formState.email} onChange={handleChange}/>
        
           <label >Password</label>
           <input type="password" className="registerInput" placeholder="Enter your password..." name="password" value={formState.password} onChange={handleChange}/>

           <button className="registerButton" style={{ cursor: 'pointer' }} type="submit" >Register</button>
       </form>
       <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
       </button>
       {/* {error && (
        <div className="registerForm">
          {error.message}
        </div>
      )} */}
    </div>
      

    )
};

export default Signup;