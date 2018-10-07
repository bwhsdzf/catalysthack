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
        <div style={{
            width: '100%',
            display: 'flex',
          }}>
          <div style={{ padding: 20 }}>
              Semester: 
          </div>
          {this.state.subjects.map(value => (
            <div style={{ padding: 6 }}>
              <PlanSubject major = {value}
              toSubject = {this.props.toSubject}
              />
            </div>
            ))}
            <div style={{ padding: 10 }}>
              <Button variant="contained" color="primary">
                Add New
              </Button>
            </div>
          </div>
      </div>
    )
  }
}

export default PlanRow;