import React from "react";
import styled from "styled-components";

const CreditsWrapper = styled.p`
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 10px;
  font-size: 14px;
  color: gray;
  line-height: 1.375;
`;

export const Credits = props => {
  const { text } = props;

  return <CreditsWrapper>{text}</CreditsWrapper>;
};
