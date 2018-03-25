import React, { Component } from 'react';

class TopInfoBox extends Component {
    render() {
        return (
            <div className="top-info-box">
                <h1> Fagkveld </h1>
                <p className='top-info'> { this.props.text } </p>
            </div>
        );
    }
}

export default TopInfoBox;
