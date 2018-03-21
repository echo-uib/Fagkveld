import React, { Component } from 'react';
import TopButtons from './TopButtons';
import ForedragCard from './ForedragCard';
import './MainContainer.css';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'FOREDRAG' }
  }

  render () {
    const foredrag = this.props.data.foredrag ? this.props.data.foredrag : [];
    const foredragCards = foredrag.map(f => <ForedragCard foredrag={f} key={f.tittel} />);

    return (
      <div className='main-container'>
        <TopButtons
          onClick={ clicked => this.setState({ selected: clicked }) }
          selected={ this.state.selected }
        />

        { foredragCards }
      </div>
    );
  }
}

export default MainContainer;
