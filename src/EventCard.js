import React, { Component } from "react";
import TimeLabel from "./TimeLabel";
import SignUpLink from "./SignUpLink";
import TextTruncate from "react-text-truncate";

class EventCard extends Component {
  render() {
    const event = this.props.event;
    const type = this.props.type;

    const title = event.title;
    const time = event.time;
    const speakers = event.speakers;
    const info = event.info;
    const lines = this.props.expand ? 0 : 2;

    let icon =
      title === "Pause med mat og drikke"
        ? "cutlery"
        : type === "foredrag"
        ? "comments"
        : "cogs";

    const timeLabel = <TimeLabel icon={icon} klokkeslett={time} />;
    const registration = event.link ? <SignUpLink link={event.link} /> : null;
    const onClick = () => this.props.onClick(event);

    return (
      <div className="event-card">
        {timeLabel}
        <div className="event-card-content">
          <p className="event-card-title"> {title} </p>
          <p className="event-card-author"> {speakers} </p>
          <div className="truncate-wrapper" onClick={onClick}>
            <TextTruncate line={lines} truncateText="..." text={info} />
          </div>
          {registration}
        </div>
      </div>
    );
  }
}

export default EventCard;
