// Represents the form in the search page
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import LevelSelect from './levelSelect';
import SemesterSelect from './semesterSelect';
import SearchList from './searchList';



class SubjectSearchForm extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <TextField
                id="search"
                name="search"
                label="Search"
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <LevelSelect
                inputId={"subject-level-simple"}
                inputValues={[1, 2, 3, 9]}
                ></LevelSelect>
            <SemesterSelect></SemesterSelect>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="state" name="state" label="State/Province/Region" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
            <Button>Submit</Button>
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

export default SubjectSearchForm;
