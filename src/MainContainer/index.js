import React, { Component } from 'react';
import TopButtons from './TopButtons';
import EventCard from './EventCard';
import './styles/MainContainer.css';
import './styles/EventCard.css';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'FOREDRAG', expandedEvent: {} }
  }

  render() {
    const onClick = (event) => { this.setState({ expandedEvent: event }) }
    const foredrag = this.props.data.foredrag ? this.props.data.foredrag : [];
    const workshops = this.props.data.workshops ? this.props.data.workshops : [];
    const eventCards = this.state.selected === 'FOREDRAG'
      ? foredrag.map(f => this.mapEvent(f, 'foredrag', onClick))
      : workshops.map(w => this.mapEvent(w, 'workshop', onClick));

    return (
      <div className='main-container'>
        <TopButtons
          onClick={clicked => this.setState({ selected: clicked })}
          selected={this.state.selected}
        />

        {eventCards}
        <p className='event-card-author credits-text'>
          Laget av Ragnhild Aalvik og Kristian Rosland
        </p>
      </div>
    );
  }

  mapEvent(e, type, onClick) {
    const expand = this.state.expandedEvent === e;
    return <EventCard event={e} type={type} key={e.tittel} expand={expand} onClick={onClick}/>
  }
}

export default MainContainer;
