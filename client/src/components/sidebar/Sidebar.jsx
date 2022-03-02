import React from "react";
import "./sidebar.css";
import AboutUS from "../../Assets/DripDudes.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT US</span>
        <img
          className="sideBarImage"
          src={AboutUS}
          alt=""
        />
        <p className="sideBarP">
          We're just four guys. We like coffee. We like coffee more than the
          normal person. We created this website to showcase to you the world of coffee !
        </p>
      </div>
      {/* <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Roasters</li>
          <li className="sideBarListItem">Beans</li>
          <li className="sideBarListItem">CHAMPIONS CLUB</li>
          <li className="sideBarListItem">ColdBrew</li>
          <li className="sideBarListItem">Fair Trade</li>
          <li className="sideBarListItem">Starbucks Bad :(</li>
        </ul>
      </div> */}
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/taylor-garrey-4934b71a8/"
          >
            {" "}
            <i className="topIcon fa-brands fa-linkedin"></i>{" "}
          </a>
          <a target="_blank" href="https://github.com/BennetWilson/drip-blog">
            {" "}
            <i className="topIcon fa-brands fa-github-square"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
