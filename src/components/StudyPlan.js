import React, { Component } from 'react';
import autoBind from 'auto-bind';
import Grid from '@material-ui/core/Grid';
import PlanRow from '../common/PlanRow';
import Button from '@material-ui/core/Button';

let existSubject = [1,2,3];
class Studyplan extends Component {
    constructor(props) {
      super(props);
       autoBind(this);

      this.state ={
        rows:[1],
        n: 2,
      }
    }

    handleAddRow(){
      let newRows = this.state.rows;
      let nR = []
      let m = this.state.n;
      console.log(m);
      
      for (let i = 0; i < newRows.length; i += 1) {
        nR.push(newRows[i]);
      }
      nR.push(m);
      console.log(nR);
      this.setState({ rows: nR });
      m = m + 1;
      this.setState({ n: m });

    }
    
    render() {
      return (
        <div>
          <Grid
            container
            spacing={16}
            alignItems={"center"}
            direction={"row"}
            justify={"flex-start"}
          >
          {this.state.rows.map(value => (
            <Grid key={value} item xs = {12}>
              <PlanRow 
                handleAddRow={this.handleAddRow}
                subjects = {existSubject}/>
            </Grid>
            ))}
          <Button variant="contained" color="primary" onClick = {this.handleAddRow}>
            Primary
          </Button>
          </Grid>
      </div>
    );
  }
}
export default Studyplan;