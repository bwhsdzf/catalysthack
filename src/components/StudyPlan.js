import React, { Component } from 'react';
import autoBind from 'auto-bind';
import Grid from '@material-ui/core/Grid';
import PlanRow from '../common/PlanRow';
import Button from '@material-ui/core/Button';
import { Panel, Row, Col } from 'react-bootstrap';

let existSubject = [1,2,3];
class Studyplan extends Component {
    constructor(props) {
      super(props);
       autoBind(this);

      this.state ={
        rows:[[]],
        n: 1,
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
          <Row>
          <Panel bsStyle="primary" style = {{
            width: 1200,
            position: "absulote",
            left:50,
          }} >
          <Panel.Heading>
            <Panel.Title componentClass="h3">Study Plan</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
          <Row>
          <Grid
            container
            spacing={16}
            alignItems={"flex-start"}
            direction={"column"}
            justify={"space-around"}
          >
          <Grid key={1} item lg = {12}>
              <PlanRow 
                handleAddRow={this.handleAddRow}
                subjects = {existSubject}/>
          </Grid>
          
          {this.state.rows.map(value => (
            <Grid key={value} item lg = {12}>
              <PlanRow 
                handleAddRow={this.handleAddRow}
                subjects = {[]}/>
            </Grid>
            ))}
          <Button variant="contained" color="primary" onClick = {this.handleAddRow}>
            Primary
          </Button>
          </Grid>
          </Row>
        </Panel.Body>
        </Panel>
        </Row>
      </div>
    );
  }
}
export default Studyplan;