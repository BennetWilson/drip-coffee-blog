import React, { useState } from 'react';
import "./login.css";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };


    return (
    <div className="login">
        <span className="loginTitle">Login</span>
       <form onSubmit={handleFormSubmit} className="loginForm">
           <label> Email</label>
           <input type="email" name='email' value={formState.email} onChange={handleChange} className="loginInput" placeholder="Enter your email..."/>
           <label >Password</label>
           <input type="password" name="password" value={formState.password} onChange={handleChange} className="loginInput" placeholder="Enter your password..."/>
           <button className="loginButton">Login</button>
       </form>
       <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link>
       </button>
    </div>
    )
};
export default Login;