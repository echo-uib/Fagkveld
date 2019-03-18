import React, { Component } from "react";

class TopInfoBox extends Component {
  render() {
    const link = "https://goo.gl/forms/CQzGIAxISZymVRzw2";
    return (
      <div className="top-info-box">
        <h1> FAGKVELD </h1>
        <h4 className="top-time-info">
          {" "}
          {"12. april kl. 17.00 | Media City Bergen"}{" "}
        </h4>
        <a
          className="attend-button"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {"MELD DEG PÅ HER"}
        </a>
        <p className="top-info"> {this.props.text} </p>
      </div>
    );
  }
}

export default TopInfoBox;
