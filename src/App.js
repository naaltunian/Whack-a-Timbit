import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import DonutGrid from './Components/DonutGrid.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <DonutGrid />
      </div>
    );
  }
}

export default App;