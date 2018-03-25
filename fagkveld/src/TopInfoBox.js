import React, { Component } from 'react';

class TopInfoBox extends Component {
    render() {
        return (
            <div className="top-info-box">
                <h1> FAGKVELD </h1>
                <h4 className='top-time-info'> 12. april kl. 17.00 | Media City Bergen </h4>
                <p className='top-info'> {this.props.text} </p>
            </div>
        );
    }
}

export default TopInfoBox;
