import React, { Component } from 'react';
import './MainContainer.css';

class SignUpLink extends Component {

  render() {
    return <a href={this.props.link} target="_blank"> MELD DEG PÅ </a>
  }
}

export default SignUpLink;
