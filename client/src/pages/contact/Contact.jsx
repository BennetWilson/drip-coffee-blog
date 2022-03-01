import React from "react";
import "../../App.css";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <h1 className="contactTitle">CONTACT US</h1>
      <div className="formcontainer">
        <form
          className="contactForm"
          target="_blank"
          action="https://formsubmit.co/ianmordaunt@gmail.com"
          method="POST"
        >
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              className="form-control"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>
          <div className="btnOrion">
            <button
              className="contactBtn"
              type="submit"
              
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
