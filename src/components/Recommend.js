import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import autoBind from 'auto-bind';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
});

class ListDividers extends React.Component {
  constructor(props){
    super(props);
    autoBind(this);
  }
    
  render(){
  return (
    <div >
      <List component="nav" style = {{
          width: 200,
      }}>
      <Typography component="p">
          {this.props.title}
        </Typography>
        <Divider />
        <ListItem button>
          <ListItemText primary={this.props.op1}
          onClick = {this.props.toSubject} />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary={this.props.op2} 
          onClick = {this.props.toSubject}/>
        </ListItem>
        <ListItem button>
          <ListItemText primary={this.props.op3} 
          onClick = {this.props.toSubject}/>
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary={this.props.op4}
          onClick = {this.props.toSubject} />
        </ListItem>
      </List>
    </div>
  );
    }
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListDividers);