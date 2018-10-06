import React, { Component } from 'react';
import autoBind from 'auto-bind';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class PlanRow extends Component {
    constructor(props){
        super(props);
        autoBind(this);
    }

    render(){
      return(
        <div>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </div>
      )
    }



}

export default PlanRow;