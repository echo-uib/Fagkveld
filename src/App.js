import React, { Component } from "react";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./styles/Global";
import { BackgroundParticles } from "./containers/Particles";
import styled from "styled-components";
import { MainContainer } from "./containers/MainContainer";
import { TopInfo } from "./containers/Header";

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  padding-left: 15%;
  padding-right: 15%;

  @media (max-width: 978px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Normalize />
        <GlobalStyle />
        <BackgroundParticles />
        <Wrapper>
          <TopInfo />
          <MainContainer />
        </Wrapper>
      </React.StrictMode>
    );
  }
}

export default App;
