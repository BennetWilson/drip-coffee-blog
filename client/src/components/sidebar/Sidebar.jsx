import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT US</span>
        <img
          className="sideBarImage"
          src="https://www.nme.com/wp-content/uploads/2021/08/dr-disrespect.jpg"
          alt=""
        />
        <p className="sideBarP">
          We're just four guys. We like coffee. We like coffee more than the
          normal person. We watch the barista world cup and make those drinks
          for fun at 4am every morning. We go to work already smelling like
          roasted coffee beans and hot milk. Some people put love into their
          drinks, but we're not some people. Violence, Speed, Momentum. Those
          are the virtues of a successful life and of one filled with winning.
          If you want to be a part of the Champions Club of coffee, subscribe to
          DRIP. Dorn the black on black on slate black blazer and make coffee
          your entire existence. Too hard core for you? Good. Get out of my
          website. *Spits*
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Roasters</li>
          <li className="sideBarListItem">Beans</li>
          <li className="sideBarListItem">CHAMPIONS CLUB</li>
          <li className="sideBarListItem">ColdBrew</li>
          <li className="sideBarListItem">Fair Trade</li>
          <li className="sideBarListItem">Starbucks Bad :(</li>
        </ul>
      </div>
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
