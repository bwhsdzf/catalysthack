import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bookmark from './components/Bookmark/Bookmark';


class App extends Component {
  render() {
    return (
      <div>
        <Bookmark />
      </div>
    );
  }
}

export default App;
