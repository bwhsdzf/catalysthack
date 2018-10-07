import React, { Component } from 'react';
import StudyPlan from '../components/StudyPlan';
import Paper from '@material-ui/core/Paper';
import Recommend from '../components/Recommend';
import { Col, Row } from 'react-bootstrap';


class MainPage extends Component {
  render() {
    return (
      <div style = {{
          display: 'flex',
          padding: 30
      }}>
          <StudyPlan />
          <div>
          <Recommend root = 'root' 
          title = {"Recommendation for today"}
          op1 = {"Recommend Subject 1"}
          op2 = {"Recommend Subject 2"}
          op3 = {"Recommend Subject 3"}
          op4 = {"Recommend Subject 4"}/>
          <Recommend root = 'root' 
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

export default MainPage;
