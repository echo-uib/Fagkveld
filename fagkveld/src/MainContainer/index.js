import React, { Component } from 'react';
import TopButtons from './TopButtons';
import EventCard from './EventCard';
import './styles/MainContainer.css';
import './styles/EventCard.css';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'FOREDRAG' }
  }

  render() {
    const foredrag = this.props.data.foredrag ? this.props.data.foredrag : [];
    const workshops = this.props.data.workshops ? this.props.data.workshops : [];
    const eventCards = this.state.selected === 'FOREDRAG'
      ? foredrag.map(f => <EventCard event={f} type="foredrag" key={f.tittel} />)
      : workshops.map(w => <EventCard event={w} type="workshop" key={w.tittel} />);

    return (
      <div className='main-container'>
        <TopButtons
          onClick={clicked => this.setState({ selected: clicked })}
          selected={this.state.selected}
        />

        {eventCards}
      </div>
    );
  }
}

export default MainContainer;
