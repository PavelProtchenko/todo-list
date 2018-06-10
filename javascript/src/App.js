import React, { Component } from 'react';
import './App.css';
import NoticeContainer from './components/NoticeContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">List of notices</h1>
        </header>
        <NoticeContainer />
      </div>
    );
  }
}

export default App;
