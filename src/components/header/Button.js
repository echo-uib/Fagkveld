import styled from "styled-components";
import { Link } from "@reach/router";

export const ButtonsWrapper = styled.nav`
  width: 100%;
  color: #777777;
  padding-left: 20%;
  padding-right: 20%;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 978px) {
    padding-left: 0;
    padding-right: 0;
    font-size: 22px;
  }

  @media (max-width: 450px) {
    font-size: 18px;
    flex-direction: column;
  }

  @media (max-width: 350px) {
    font-size: 16px;
  }
`;

export const ButtonLink = styled(Link)`
  height: 45px;
  width: 30%;
  cursor: pointer;
  border-bottom: 3px solid #777777;
  text-decoration: none;

  @media (max-width: 450px) {
    width: 48%;
  }

  &:hover {
    font-weight: 500;
    border-bottom: 3px solid orange;
    color: black;
  }

  [aria-current] {
    border-bottom: 3px solid orange;
    color: black;
  }
`;
