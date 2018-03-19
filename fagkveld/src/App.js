import React, { Component } from 'react';
import MainContainer from './MainContainer';
import TopInfoBox from './TopInfoBox';
import data from './bidrag.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopInfoBox />
        <MainContainer data={data}/>
      </div>
    );
  }
}

export default App;
