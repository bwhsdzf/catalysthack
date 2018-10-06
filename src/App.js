import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';


class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <MainPage />
      </div>
    );
  }
}

export default App;
