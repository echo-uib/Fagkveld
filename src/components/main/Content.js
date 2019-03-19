import React from "react";
import { talks, workshops, meta } from "../../Content";
import { comparator } from "../../utils/CompareEvent";
import { EventCard } from "../common/EventCard";

export const Home = () => {
  return meta.info;
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
