import React, { Component } from 'react';
import autoBind from 'auto-bind';
import Typography from '@material-ui/core/Typography';
import SubjectSearchForm from '../components/searchComponents/subjectSearchForm';


class SearchPage extends Component {

  

  render() {
      return (
        <div style = {{
            padding: 30
        }}>
        <SubjectSearchForm />
        </div>
        );
  }
}

export default SearchPage;
