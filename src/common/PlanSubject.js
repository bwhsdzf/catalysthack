import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import autoBind from 'auto-bind';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = {
  card: {
    maxWidth: 350,
    minWidth: 250
  },
  title: {
    fontSize: 14,
  },
  "actionArea": {
    width: '100%'
  },
};


class PlanSubject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      major: this.props.major,
    }
    autoBind(this);
  }

  renderColorBand() {
    const divStyles = {
      backgroundColor: 'black',
      width: '100%',
      height: 5
    };
    // different colour depending on subject type
    if (this.state.major === 'major') {
      divStyles.backgroundColor = "red";
    } else if (this.state.major === 'elective') {
      divStyles.backgroundColor = "yellow";
    } else if (this.state.major === "breadth") {
      divStyles.backgroundColor = "blue";
    }
    return(
      <div style={divStyles} />
    );
  }

  render() {
    const { classes } = this.props;
    return(
      <div>
        <Card className={classes.card}>
          {this.renderColorBand()}
          <CardContent>
            <CardActionArea className={classes.actionArea}>

            <Typography className={classes.title} color="textSecondary" gutterBottom>
              MELU10001
            </Typography>
            <Typography variant="headline" component="h2">
              Sample Subject
            </Typography>
            <Typography component="p" color="textSecondary">
              Faculty
            </Typography>
            </CardActionArea>
          </CardContent>
          <CardActions>
            <Button size="small" onClick = {this.props.toSubject}>
              Write Reviews
            </Button>
            <Button size="small" onClick = {this.props.toSubject}>
              Read Reviews
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

PlanSubject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlanSubject);
