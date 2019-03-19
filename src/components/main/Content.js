import React from "react";
import styled from "styled-components";
import { talks, workshops, meta } from "../../Content";
import { comparator } from "../../utils/CompareEvent";
import { EventCard } from "../common/EventCard";
import { SignUpLink } from "../common/SignUp";

const HomeWrapper = styled.p`
  margin-top: 40px;
`;

export const Home = () => {
  return (
    <HomeWrapper>
      {meta.info}
      <br />
      <SignUpLink
        link={meta.registration.uib.link}
        text={meta.registration.uib.text}
      />
      <br />
      <SignUpLink
        link={meta.registration.hvl.link}
        text={meta.registration.hvl.text}
      />
      <br />
      <SignUpLink
        link={meta.registration.fim.link}
        text={meta.registration.fim.text}
      />
      <br />
    </HomeWrapper>
  );
};

export const Talks = () => {
  talks.sort(comparator);

  return talks.map(t => <EventCard event={t} type="talk" key={t.title} />);
};

export const Workshops = () => {
  workshops.sort(comparator);

  return workshops.map(w => (
    <EventCard event={w} type="workshop" key={w.title} />
  ));
};
