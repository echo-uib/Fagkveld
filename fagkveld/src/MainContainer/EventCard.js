import React, { Component } from 'react';
import TimeLabel from './TimeLabel';
import SignUpLink from './SignUpLink';
import TextTruncate from 'react-text-truncate';

class EventCard extends Component {

  render() {
    const event = this.props.event;
    const type = this.props.type;

    const tittel = event.tittel;
    const klokkeslett = event.klokkeslett;
    const foredragsholder = event.foredragsholder;
    const icon = type === 'foredrag' ? 'comments' : 'cogs';
    const info = event.info;
    const lines = this.props.expand ? 0 : 2;

    const timeLabel = <TimeLabel icon={icon} klokkeslett={klokkeslett} />
    const påmelding = event.link ? <SignUpLink link={event.link} /> : null;
    const onClick = () => {
      if (this.props.expand)
        this.props.onClick({})
      else
        this.props.onClick(event)
    }

    return (
      <div className='event-card' onClick={onClick}>
        {timeLabel}
        <div className='event-card-content'>
          <p className='event-card-title'> {tittel} </p>
          <p className='event-card-author'> {foredragsholder} </p>
          <TextTruncate
            line={lines}
            truncateText="..."
            text={info} />
          {påmelding}
        </div>
      </div>
    );
  }
}

export default EventCard;
