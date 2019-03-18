import React, { Component } from "react";
import content from "./Content";

class TopInfoBox extends Component {
  render() {
    const link = "https://goo.gl/forms/CQzGIAxISZymVRzw2";
    return (
      <div className="top-info-box">
        <h1>{content.meta.name.toUpperCase()}</h1>
        <h4 className="top-time-info">{content.meta.date}</h4>
        <a
          className="attend-button"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {"MELD DEG PÅ HER"}
        </a>
        <p className="top-info"> {content.meta.info} </p>
      </div>
    );
  }
}

export default TopInfoBox;
