import React, { Component } from 'react';
import autoBind from 'auto-bind';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import PlanSubject from './PlanSubject';
import Button from '@material-ui/core/Button';

class PlanRow extends Component {
  constructor(props){
    super(props);
    PlanRow.propTypes = {
      handleAddRow: PropTypes.func.isRequired,
    }

    autoBind(this);
    this.state = {
      subjects:this.props.subjects,
      n:0,
    }
  }


  render(){
    return(
      <div>
        <Grid
            container
            spacing={16}
            alignItems={"baseline"}
            direction={"row"}
            justify={"space-evenly"}
          >
          <Grid item xs = {2}>
              Semester: 
          </Grid>
          {this.state.subjects.map(value => (
            <Grid key={value} item xs = {3}>
              <PlanSubject major = {value}/>
            </Grid>
            ))}
            <Grid item xs = {1}>
              <Button variant="contained" color="primary">
                Add New
              </Button>
            </Grid>
          </Grid>
      </div>
    )
  }
}

export default PlanRow;