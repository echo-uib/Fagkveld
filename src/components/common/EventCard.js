import React from "react";
import styled from "styled-components";
import { TimeLabel } from "./TimeLabel";
import { SignUpLink } from "./Registration";

const EventCardWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const EventCardTitle = styled.p`
  font-size: 1.17em;
  font-weight: 300;
  line-height: 1.375;
`;

const EventCardAuthor = styled.p`
  font-size: 14px;
  color: gray;
  line-height: 1.375;
  margin-top: 5px;
  margin-bottom: 4px;
`;

export const EventCard = props => {
  const event = props.event;
  const type = props.type;
  const { title, time, speakers, info } = event;

  let icon =
    title === "Pause med mat og drikke"
      ? "cutlery"
      : type === "talk"
      ? "comments"
      : "cogs";

  const registration = event.link ? (
    <SignUpLink link={event.link} text="MELD DEG PÅ" />
  ) : null;

  return (
    <EventCardWrapper>
      <TimeLabel icon={icon} time={time} />
      <EventCardTitle>{title}</EventCardTitle>
      <EventCardAuthor>{speakers}</EventCardAuthor>
      <p>{info}</p>
      {registration}
    </EventCardWrapper>
  );
};
