import React from "react";
import styled from "styled-components";

const SignUp = styled.a`
  font-size: 15px;
  color: orange;
  font-weight: 300;
  text-decoration: underline;

  &:hover {
    font-weight: 500;
  }
`;

export const SignUpLink = ({ link, text }) => {
  return (
    <SignUp href={link} target="_blank" rel="noopener noreferrer">
      {text}
    </SignUp>
  );
};
