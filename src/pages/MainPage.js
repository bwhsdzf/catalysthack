import React, { Component } from 'react';
import StudyPlan from '../components/StudyPlan';
import ListDivider from '../components/Recommend';
import autoBind from 'auto-bind';


class MainPage extends Component {

  constructor(props){
    super(props);
    autoBind(this);
    this.state = {
      page: 'main',
    }
  }

  toSearchPage(){
    this.setState({page : 'search'})
  }

  render() {
    switch(this.state.page){
      case 'main':
      return (
        <div style = {{
            display: 'flex',
            padding: 30
        }}>
            <StudyPlan />
            <div>
            <ListDivider root = 'root' 
            title = {"Recommendation for today"}
            op1 = {"Recommend Subject 1"}
            op2 = {"Recommend Subject 2"}
            op3 = {"Recommend Subject 3"}
            op4 = {"Recommend Subject 4"}/>
            <ListDivider root = 'root' 
            title = {"Bookmarks"}
            op1 = {"Bookmarked Subject 1"}
            op2 = {"Bookmarked Subject 2"}
            op3 = {"Bookmarked Subject 3"}
            op4 = {"Bookmarked Subject 4"}/>
            </div>
        </div>
        );
      case 'search':
        return null;
      default:
      return (
        <div style = {{
            display: 'flex',
            padding: 30
        }}>
            <StudyPlan />
            <div>
            <ListDivider root = 'root' 
            title = {"Recommendation for today"}
            op1 = {"Recommend Subject 1"}
            op2 = {"Recommend Subject 2"}
            op3 = {"Recommend Subject 3"}
            op4 = {"Recommend Subject 4"}/>
            <ListDivider root = 'root' 
            title = {"Bookmarks"}
            op1 = {"Bookmarked Subject 1"}
            op2 = {"Bookmarked Subject 2"}
            op3 = {"Bookmarked Subject 3"}
            op4 = {"Bookmarked Subject 4"}/>
            </div>
        </div>
        );
    }
    
    
  }
}

export default MainPage;
