import React from "react";
import styled from "styled-components";
import { meta } from "../Content";
import { Router } from "@reach/router";
import { Talks, Workshops, Home } from "../components/main/Content";
import { ButtonsWrapper, ButtonLink } from "../components/header/Button";
import { Credits } from "../components/footer/Credits";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;

  background-color: white;
  color: black;

  padding-top: 5%;
  padding-left: 20%;
  padding-right: 20%;

  @media (max-width: 978px) {
    padding-right: 8%;
    padding-left: 8%;
  }
`;

export function MainContainer() {
  return (
    <MainWrapper>
      <ButtonsWrapper>
        <ButtonLink to="/">HJEM</ButtonLink>
        <ButtonLink to="talks">FOREDRAG</ButtonLink>
        <ButtonLink to="workshops">WORKSHOPS</ButtonLink>
      </ButtonsWrapper>
      <Router>
        <Home path="/" />
        <Talks path="talks" />
        <Workshops path="workshops" />
      </Router>
      <Credits text={meta.madeBy} />
    </MainWrapper>
  );
}
