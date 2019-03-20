import React from "react";
import styled from "styled-components";
import { meta } from "../Content";
import { HeaderTitle } from "../components/header/Title";
import { HeaderTime } from "../components/header/Time";

const HeaderWrapper = styled.div`
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const TopInfo = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>{meta.name.toUpperCase()}</HeaderTitle>
      <HeaderTime>{meta.date}</HeaderTime>
    </HeaderWrapper>
  );
};
