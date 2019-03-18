import React, { Component } from "react";

class TopButtons extends Component {
  render() {
    const foredragSelected =
      this.props.selected === "FOREDRAG" ? "button-selected" : "";
    const workshopSelected =
      this.props.selected === "WORKSHOP" ? "button-selected" : "";
    const onClick = text => this.props.onClick(text);

    return (
      <div className="top-buttons">
        <div
          className={`top-button ${foredragSelected}`}
          onClick={() => onClick("FOREDRAG")}
        >
          FOREDRAG
        </div>
        <div
          className={`top-button ${workshopSelected}`}
          onClick={() => onClick("WORKSHOP")}
        >
          WORKSHOPS
        </div>
      </div>
    );
  }
}

export default TopButtons;
