import React, { Component } from "react";
import TimeLabel from "./components/common/TimeLabel";
import { SignUpLink } from "./components/common/Registration";

class EventCard extends Component {
  render() {
    const event = this.props.event;
    const type = this.props.type;

    const { title, time, speakers, info } = event;

    let icon =
      title === "Pause med mat og drikke"
        ? "cutlery"
        : type === "talks"
        ? "comments"
        : "cogs";

    const timeLabel = <TimeLabel icon={icon} time={time} />;
    const registration = event.link ? (
      <SignUpLink link={event.link} text="MELD DEG PÅ" />
    ) : null;

    return (
      <div className="event-card">
        {timeLabel}
        <div className="event-card-content">
          <p className="event-card-title"> {title} </p>
          <p className="event-card-author"> {speakers} </p>
          <div className="truncate-wrapper">{info}</div>
          {registration}
        </div>
      </div>
    );
  }
}

export default EventCard;
