import React from "react";
import styled from "styled-components";
import { meta } from "../Content";
import { HeaderTitle } from "../components/header/Title";
import { HeaderTime } from "../components/header/Time";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  @media (max-width: 978px) {
    width: 85%;
  }
`;

export const TopInfo = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>{meta.name.toUpperCase()}</HeaderTitle>
      <HeaderTime>{meta.date}</HeaderTime>
    </HeaderWrapper>
  );
};
