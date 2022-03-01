import React from "react";
 
import "./topbar.css";
import Auth from "../../utils/auth";

export default function TopBar() {
  const user =  Auth.loggedIn();

  // const handleDropdown = (event) => {

  // }

  return (
    
     <div className="container-fluid">
        
     <div className="top">
      {/* To revert back href how we had it, move the two logos href the top of this. Like where this comment is, change the className href topLeft and then change the className on the home about div href topCenter. topLeft, topCenter, topRight */}
      <div className="topLeft">
        <div className="dropdown">
          <a href="" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <div className="dropdown-menu" >
            <ul className="topList">
              <li className="topListItem topListItemHome">
                <a className="link" href="/">
                  HOME
                </a>
              </li>
              <li className="topListItem">
                <a className="link" href="/contact">
                  CONTACT
                </a>
              </li>
              <li className="topListItem">
                <a className="link" href="/write">
                  WRITE
                </a>
              </li>
              <li className="topListItem">
                <a className="link" href="/brew">
                  BREW
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="topCenter ">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/taylor-garrey-4934b71a8/" >
          {" "}
          <i className="topIcon fa-brands fa-linkedin"></i>{" "}
        </a>
        <a target="_blank" href="https://github.com/BennetWilson/drip-blog">
          {" "}
          <i className="topIcon fa-brands fa-github-square"></i>{" "}
        </a>
      </div>
      {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
      <div className="topRight">
        {user ? (
          <>
            <img
              className="topImg"
              src="https://via.placeholder.com/250"
              alt="placeholder"
            />
            <ul className="rightList">
              <li className="rightListItem">
                <a className="link" onClick={()=>Auth.logout()}>
                  LOGOUT
                </a>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="rightList">
              <li className="rightListItem">
                <a className="link" href="/login">
                  LOGIN
                </a>
              </li>
              <li className="rightListItem">
                <a className="link" href="/register">
                  REGISTER
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
    </div>
  );
}
