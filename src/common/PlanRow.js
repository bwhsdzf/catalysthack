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

  handleAddSubject(){
    
  }


  render(){
    return(
      <div>
        <Grid
            container
            spacing={16}
            alignItems={"flex-start"}
            direction={"row"}
            justify={"flex-start"}
          >
          <Grid item xs = {3}>
              Semester: 
          </Grid>
          {this.props.subjects.map(value => (
            <Grid key={value} item xs = {2}>
              <Button variant="contained" color="secondary">
              Primary
              </Button>
            </Grid>
            ))}
            <Grid item alignItems={"center"}>
              <Button variant="contained" color="primary">
                Add New Subject
              </Button>
            </Grid>
          </Grid>
      </div>
    )
  }
}

export default PlanRow;