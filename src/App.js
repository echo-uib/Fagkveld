import React, { Component } from "react";
import MainContainer from "./MainContainer";
import TopInfoBox from "./TopInfoBox";
import { talks, workshops, meta } from "./Content";
import { Particles } from "react-particles-js";

class App extends Component {
  render() {
    const comparator = (e1, e2) => {
      const h1 = parseInt(e1.time.substring(0, 2), 10);
      const h2 = parseInt(e2.time.substring(0, 2), 10);
      const m1 = parseInt(e1.time.substring(3, 5), 10);
      const m2 = parseInt(e2.time.substring(3, 5), 10);

      if (h1 !== h2) return h1 - h2;
      else return m1 - m2;
    };

    talks.sort(comparator);
    workshops.sort(comparator);

    return (
      <div>
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
        <div className="app">
          <TopInfoBox text={meta.info} />
          <MainContainer data={{ talks, workshops }} />
        </div>
      </div>
    );
  }
}

export default App;
