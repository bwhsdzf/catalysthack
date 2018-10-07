import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import SubjectPage from './pages/SubjectPage';
import SearchPage from './pages/SearchPage';
import autoBind from 'auto-bind';


class App extends Component {
  constructor(props){
    super(props);
    autoBind(this);
    this.state = {
      page: 'search',
    }
  }

  toSearchPage(){
    this.setState({page : 'search'});
  }

  toBookMark(){
    this.setState({page : 'bookmark'});
  }

  toSubject(){
    this.setState({page : 'subject'});
  }

  toHome(){
    this.setState({ page: 'main'});
  }

  render() {
    switch(this.state.page){
      case 'main':
      return (
        <div>
        <Header 
        toBookMark = {this.toBookMark}
        toHome = {this.toHome}
        toSearchPage = {this.toSearchPage}
        />
        <MainPage 
        toSubject = {this.toSubject}/>
        </div>
      );
      case 'subject':
        return(
          <div>
            <Header 
            toBookMark = {this.toBookMark}
            toHome = {this.toHome}
            toSearchPage = {this.toSearchPage}
            />
            <SubjectPage />
          </div>
        );
      case 'search':
        return (
          <div>
            <Header 
            toBookMark = {this.toBookMark}
            toHome = {this.toHome}
            toSearchPage = {this.toSearchPage}
            />
            <SearchPage />
          </div>
        );
      default:
      return (
          <div>
          <Header />
          <MainPage />
          </div>
      );
  }
}
}

export default App;
