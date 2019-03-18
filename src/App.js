import React, { Component } from "react";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./styles/Global";
import styled from "styled-components";
import MainContainer from "./MainContainer";
import { TopInfo } from "./containers/TopInfo";
import { talks, workshops } from "./Content";
import { comparator } from "./utils/CompareEvent";
import { Particles } from "react-particles-js";

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
    talks.sort(comparator);
    workshops.sort(comparator);

    return (
      <>
        <Normalize />
        <GlobalStyle />
        <Particles
          params={{
            particles: {
              number: {
                value: 100
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
          className="particles"
        />
        <Wrapper>
          <TopInfo />
          <MainContainer data={{ talks, workshops }} />
        </Wrapper>
      </>
    );
  }
}

export default App;
