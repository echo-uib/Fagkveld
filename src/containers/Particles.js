import React from "react";
import styled from "styled-components";
import { Particles } from "react-particles-js";

export const ParticleWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  canvas {
    position: absolute;
  }
`;

export const BackgroundParticles = () => {
  return (
    <ParticleWrapper>
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
      />
    </ParticleWrapper>
  );
};
