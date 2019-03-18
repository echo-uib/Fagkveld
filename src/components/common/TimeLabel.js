import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

class TimeLabel extends Component {
  render() {
    const iconStyle = { lineHeight: "1.30em", fontSize: "1.30em" };
    const icon = <FontAwesome name={this.props.icon} style={iconStyle} />;
    const time = <p className="time-label-text"> {this.props.time} </p>;

    return (
      <div className="time-label">
        {icon}
        {time}
      </div>
    );
  }
}

export default TimeLabel;
