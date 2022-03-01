import React from "react";
import "../../App.css";
import "./Contact.css";

export default function Contact() {
  return (
    <div className='contact'>
      <h1 className="contactTitle">CONTACT US</h1>
      <div className="formcontainer">
        <form
          className="contactForm"
          target="_blank"
          action="https://formsubmit.co/ianmordaunt@gmail.com"
          method="POST"
        >
          <div class="form-group">
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div class="col">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <textarea
              placeholder="Your Message"
              class="form-control"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>
          <div className="btnOrion">
            <button
              className="contactBtn btn btn-light btn-block py-3"
              type="submit"
              // class="btn btn-lg btn-dark btn-block"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
