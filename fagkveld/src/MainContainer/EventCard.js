import React, { Component } from 'react';
import TimeLabel from './TimeLabel';

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
    const påmelding = null

    return (
      <div className='event-card'>
        {timeLabel}
        <div className='event-card-content'>
          <div className='event-card-title'>
            <p className='event-card-title-text'> {tittel} </p>
            <p className='event-card-title-author'> {foredragsholder} </p>
          </div>
          <p className='event-info'> {info} </p>
          {påmelding}
        </div>
      </div>
    );
  }
}

export default EventCard;
