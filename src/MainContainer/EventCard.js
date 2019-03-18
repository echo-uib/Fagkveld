import React, { Component } from "react";
import TimeLabel from "./TimeLabel";
import SignUpLink from "./SignUpLink";
import TextTruncate from "react-text-truncate";

class EventCard extends Component {
  render() {
    const event = this.props.event;
    const type = this.props.type;

    const tittel = event.tittel;
    const klokkeslett = event.klokkeslett;
    const foredragsholder = event.foredragsholder;
    const info = event.info;
    const lines = this.props.expand ? 0 : 2;

    let icon =
      tittel === "Pause med mat og drikke"
        ? "cutlery"
        : type === "foredrag"
        ? "comments"
        : "cogs";

    const timeLabel = <TimeLabel icon={icon} klokkeslett={klokkeslett} />;
    const påmelding = event.link ? <SignUpLink link={event.link} /> : null;
    const onClick = () => this.props.onClick(event);

    return (
      <div className="event-card">
        {timeLabel}
        <div className="event-card-content">
          <p className="event-card-title"> {tittel} </p>
          <p className="event-card-author"> {foredragsholder} </p>
          <div className="truncate-wrapper" onClick={onClick}>
            <TextTruncate line={lines} truncateText="..." text={info} />
          </div>
          {påmelding}
        </div>
      </div>
    );
  }
}

export default EventCard;
