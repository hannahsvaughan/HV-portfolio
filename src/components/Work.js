import React, { Component } from "react";
import ComingSoon from "../images/comming-soon.jpeg";

export default class Work extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1 style={{ textAlign: "center"}}>Check Out Some of My Work</h1>
            <div id="work-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="modal-01">
                          <img src={ComingSoon} className="item-img" alt="" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
