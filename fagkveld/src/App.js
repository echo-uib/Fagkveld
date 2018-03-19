import React, { Component } from 'react';
import MainContainer from './MainContainer';
import data from './bidrag.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app">
          <MainContainer data={data}/>
        </div>
      </div>
    );
  }
}

export default App;
