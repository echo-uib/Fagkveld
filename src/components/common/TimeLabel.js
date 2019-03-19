import React from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

const TimeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: -35px;

  @media (max-width: 978px) {
    margin-left: 0;
  }
`;

const TimeText = styled.p`
  margin: 0;
  margin-left: 15px;
`;

export const TimeLabel = props => {
  const iconStyle = { lineHeight: "1.30em", fontSize: "1.30em" };
  const icon = <FontAwesome name={props.icon} style={iconStyle} />;

  return (
    <TimeWrapper>
      {icon}
      <TimeText>{props.time}</TimeText>
    </TimeWrapper>
  );
};
