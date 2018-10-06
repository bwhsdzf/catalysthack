// Represents the form in the search page
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import LevelSelect from './levelSelect';
import SemesterSelect from './semesterSelect';
import SearchList from './searchList';
import FacultySelect from './facultySelect';


class SubjectSearchForm extends Component {
  render() {
    // classes doesn't work?
    // const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <TextField
              id="search"
              name="search"
              label="Search"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LevelSelect
                inputId={"subject-level-simple"}
                inputValues={[1, 2, 3, 9]}
                ></LevelSelect>
            <SemesterSelect></SemesterSelect>
            <FacultySelect></FacultySelect>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
                className={"classes.submit"}
                >
              Search
            </Button>
          </Grid>
        </Grid>
        <br/>
        {/* Search results */}
        <Typography variant="headline" color="textSecondary"
                style={{textAlign:"left"}}>
              Search Results
        </Typography>
        <SearchList></SearchList>
      </div>
    )
  }
}

// SubjectSearchForm.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default SubjectSearchForm;
