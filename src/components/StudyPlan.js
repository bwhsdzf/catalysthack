import React, { Component } from 'react';
import autoBind from 'auto-bind';
import Grid from '@material-ui/core/Grid';
import PlanRow from '../common/PlanRow';
import Button from '@material-ui/core/Button';
import { Panel, Row } from 'react-bootstrap';

let existSubject1 = ["major","major","elective","breadth"];
let existSubject2 = ["major"];
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
            width: 1250
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
          <div>
              <PlanRow
                toSubject = {this.props.toSubject}
                toSearchPage = {this.props.toSearchPage}
                handleAddRow={this.handleAddRow}
                subjects = {existSubject1}/>
          </div>
          <div>
              <PlanRow
                toSubject = {this.props.toSubject}
                toSearchPage = {this.props.toSearchPage}
                handleAddRow={this.handleAddRow}
                subjects = {existSubject2}/>
          </div>
          {this.state.rows.map(value => (
            <div key={value}>
              <PlanRow
                toSubject = {this.props.toSubject}
                toSearchPage = {this.props.toSearchPage}
                handleAddRow={this.handleAddRow}
                subjects = {[]}/>
            </div>
            ))}
          <Button variant="contained" color="primary" onClick = {this.handleAddRow}>
            New Semester
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