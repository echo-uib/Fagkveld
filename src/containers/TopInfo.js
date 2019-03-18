import React from "react";
import styled from "styled-components";
import { meta } from "../Content";
import { HeaderTitle } from "../components/header/Title";
import { HeaderTime } from "../components/header/Time";
import { SignUpLink } from "../components/common/Registration";

const TopInfoWrapper = styled.div`
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.2),
    #000,
    rgba(0, 0, 0, 0.2)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  @media (max-width: 978px) {
    width: 85%;
  }
`;

const TopContent = styled.p`
  width: 80%;
  margin-top: 0;
  margin-bottom: 2em;
  text-align: center;
`;

export const TopInfo = () => {
  return (
    <TopInfoWrapper>
      <HeaderTitle>{meta.name.toUpperCase()}</HeaderTitle>
      <HeaderTime>{meta.date}</HeaderTime>
      <SignUpLink
        link={meta.registration.uib.link}
        text={meta.registration.uib.text}
      />
      <TopContent>{meta.info}</TopContent>
    </TopInfoWrapper>
  );
};
