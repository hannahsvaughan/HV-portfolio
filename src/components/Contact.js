import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <h1>Contact Me</h1>
          <div className="ten columns">
          </div>
        </div>

        <div>
          <aside>
            <div className="center">
              {" "}
              <form id="form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
