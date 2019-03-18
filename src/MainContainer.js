import React, { Component } from "react";
import TopButtons from "./TopButtons";
import EventCard from "./EventCard";
import { meta } from "./Content";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "FOREDRAG", expandedEvent: {} };
  }

  render() {
    const onClick = event => {
      this.setState({ expandedEvent: event });
    };
    const talk = this.props.data.talks ? this.props.data.talks : [];
    const workshops = this.props.data.workshops
      ? this.props.data.workshops
      : [];
    const eventCards =
      this.state.selected === "FOREDRAG"
        ? talk.map(f => this.mapEvent(f, "talk", onClick))
        : workshops.map(w => this.mapEvent(w, "workshop", onClick));

    return (
      <div className="main-container">
        <TopButtons
          onClick={clicked => this.setState({ selected: clicked })}
          selected={this.state.selected}
        />

        {eventCards}
        <p className="event-card-author credits-text">{meta.madeBy}</p>
      </div>
    );
  }

  mapEvent(e, type, onClick) {
    const expand = this.state.expandedEvent === e;
    return (
      <EventCard
        event={e}
        type={type}
        key={e.title}
        expand={expand}
        onClick={onClick}
      />
    );
  }
}

export default MainContainer;
