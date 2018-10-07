import React, { Component } from 'react';
import autoBind from 'auto-bind';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

class PlanSubject extends Component {
    constructor(props){
        super(props);
        
        this.state = {
          major: this.props.major,
        }
        autoBind(this);
    }

    

    renderColorBand(){
      if(this.state.major === 'major'){
        console.log("major");
        return(
          <hr
            style={{
            // color: "red",
            backgroundColor: "red",
            height: 5
            }}
          />
        );
      } else if (this.state.major === 'elective'){
        return(
          <hr
            style={{
            // color: "red",
            backgroundColor: "yellow",
            height: 5
            }}
          />
        );
      } else if (this.state.major === "breadth"){
        return(
          <hr
            style={{
            // color: "red",
            backgroundColor: "blue",
            height: 5
            }}
          />
        );
      }
    }

    render(){
      return(
        <div>
          <Card style = {{
            maxWidth: "500"
          }}>
          <CardActionArea>
          {this.renderColorBand()}
      <CardContent>
        <Typography color="textSecondary">
          MELU10001
        </Typography>
        <Typography variant="headline" component="h2">
          Sample Subject
        </Typography>
        <Typography component="p">
          Faculty
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick = {this.props.toSubject}>Write Reviews</Button>
      </CardActions>
      <CardActions>
        <Button size="small" onClick = {this.props.toSubject}>Read Reviews</Button>
      </CardActions>
    </Card>
        </div>
      )
    }



}

export default PlanSubject;