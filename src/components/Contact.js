import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>

        <div>
          <aside>
            <div>
              {" "}
              <form id="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
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
