import React from "react";
import styled from "styled-components";

const SignUp = styled.a`
  font-size: 15px;
`;

export function SignUpLink({ link, text }) {
  return (
    <SignUp href={link} target="_blank" rel="noopener noreferrer">
      {text}
    </SignUp>
  );
}
