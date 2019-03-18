import React, { Component } from 'react';

class SignUpLink extends Component {
  render() {
    return <a className='sign-up' href={this.props.link} target="_blank"> MELD DEG PÅ </a>
  }
}

export default SignUpLink;
