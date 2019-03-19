import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("http://fonts.googleapis.com/css?family=Raleway:200,300,400");
  body {
    font-family: "Raleway";
    font-weight: 200;
    line-height: 1.875;
    margin: 0;
    padding: 0;
    background-color: black;
  }

  p {
    margin-top: 0;
    text-align: start;
  }
`;
