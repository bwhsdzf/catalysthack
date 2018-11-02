import React, { Component } from 'react';
import autoBind from 'auto-bind';
import SubjectSearchForm from '../components/searchComponents/subjectSearchForm';


class SearchPage extends Component {
  constructor(props){
    super(props);
    autoBind(this);
  }


  render() {
      return (
        <div style = {{
            padding: 30
        }}>
        <SubjectSearchForm
        toSubject = {this.props.toSubject}/>
        </div>
        );
  }
}

export default SearchPage;
