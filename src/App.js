import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import MainPage from './pages/MainPage';
import SubjectPage from './pages/SubjectPage';
import SearchPage from './pages/SearchPage';
import BookmarkPage from './components/Bookmark/BookmarkPage';
import autoBind from 'auto-bind';


class App extends Component {
  constructor(props){
    super(props);
    autoBind(this);
    this.state = {
      page: 'main',
    }
  }

  toSearchPage(){
    this.setState({page : 'search'});
  }

  toBookmark() {
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
        toBookmark = {this.toBookmark}
        toHome = {this.toHome}
        toSearchPage = {this.toSearchPage}
        />
        <MainPage
        toSubject = {this.toSubject}
        toSearchPage = {this.toSearchPage}/>
        </div>
      );
      case 'subject':
        return(
          <div>
            <Header
            toBookmark = {this.toBookmark}
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
            toBookmark = {this.toBookmark}
            toHome = {this.toHome}
            toSearchPage = {this.toSearchPage}
            />
            <SearchPage
            toSubject = {this.toSubject}/>
          </div>
        );
        case 'bookmark':
        return (
          <div>
            <Header
            toBookmark = {this.toBookmark}
            toHome = {this.toHome}
            toSearchPage = {this.toSearchPage}
            />
            <BookmarkPage />
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
