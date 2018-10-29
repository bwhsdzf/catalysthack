import React, { Component } from 'react';
import StudyPlan from '../components/StudyPlan';
import ListDivider from '../components/Recommend';
import autoBind from 'auto-bind';
import PropTypes from 'prop-types';


class MainPage extends Component {
  constructor(props){
    super(props);
    autoBind(this);
  }


  render() {
      return (
        <div style = {{
            display: 'flex',
            padding: 30
        }}>
            <StudyPlan
            toSubject = {this.props.toSubject}
            toSearchPage = {this.props.toSearchPage}/>
            <div>
            <ListDivider root = 'root'
            toSubject = {this.props.toSubject}
            title = {"Recommendation for today"}
            op1 = {"Recommend Subject 1"}
            op2 = {"Recommend Subject 2"}
            op3 = {"Recommend Subject 3"}
            op4 = {"Recommend Subject 4"}/>
            <ListDivider root = 'root'
            toSubject = {this.props.toSubject}
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

MainPage.propTypes = {
  toSubject: PropTypes.func.isRequired,
};

export default MainPage;
