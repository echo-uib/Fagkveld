import React from "react";
import FontAwesome from "react-fontawesome";

export const TimeLabel = props => {
  const iconStyle = { lineHeight: "1.30em", fontSize: "1.30em" };
  const icon = <FontAwesome name={props.icon} style={iconStyle} />;
  const time = <p className="time-label-text"> {props.time} </p>;

  return (
    <div className="time-label">
      {icon}
      {time}
    </div>
  );
};
