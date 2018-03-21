import React, { Component } from 'react';

class ForedragCard extends Component {

  render() {
    const foredrag = this.props.data.foredrag;
    const type = this.props.data.type;

    const tittel = foredrag.tittel;
    const klokkeslett = foredrag.klokkeslett;
    const icon = type === 'foredrag' ? 'comments' : 'cogs';

    //<TimeLabel icon={icon} klokkeslett={klokkeslett} />

    return (
      <div className='foredrag-card'> FOREDRAG </div>
    );
  }
}

export default ForedragCard;
