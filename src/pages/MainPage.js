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
          <Recommend root = 'root' />
      </div>
    );
  }
}

export default MainPage;
