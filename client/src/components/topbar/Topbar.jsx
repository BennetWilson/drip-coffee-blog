import React from "react";
import { Link } from "react-router-dom"
import "./topbar.css";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
  {/* To revert back to how we had it, move the two logos to the top of this. Like where this comment is, change the className to topLeft and then change the className on the home about div to topCenter. topLeft, topCenter, topRight */}
      <div className="topLeft">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">WRITE</Link>
          </li>
          <li className="topListItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topCenter">
      <a target='_blank'href="https://www.linkedin.com/in/taylor-garrey-4934b71a8/">  <i className="topIcon fa-brands fa-linkedin"></i> </a>
       <a target="_blank" href="https://github.com/BennetWilson/drip-blog"> <i className="topIcon fa-brands fa-github-square"></i> </a>
      </div>
      <div className="topRight">
        {
          user ? (
            <img
              className='topImg'
              src="https://via.placeholder.com/250"
              alt="placeholder"
            />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
