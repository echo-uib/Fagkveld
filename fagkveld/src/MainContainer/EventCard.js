import React, { Component } from 'react';
import TimeLabel from './TimeLabel';
import SignUpLink from './SignUpLink';

class EventCard extends Component {

  render() {
    const event = this.props.event;
    const type = this.props.type;

    const tittel = event.tittel;
    const klokkeslett = event.klokkeslett;
    const foredragsholder = event.foredragsholder;
    const icon = type === 'foredrag' ? 'comments' : 'cogs';
    const info = event.info;

    const timeLabel = <TimeLabel icon={icon} klokkeslett={klokkeslett} />
    const påmelding = event.link ? <SignUpLink link={event.link} /> : null;

    return (
      <div className='event-card'>
        {timeLabel}
        <div className='event-card-content'>
          <p className='event-card-title'> {tittel} </p>
          <p className='event-card-author'> {foredragsholder} </p>
          <p className='event-card-info'> {info} </p>
          {påmelding}
        </div>
      </div>
    );
  }
}

export default EventCard;
