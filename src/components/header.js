import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';
import autoBind from 'auto-bind';
// // import Switch from '@material-ui/core/Switch';
// // import FormControlLabel from '@material-ui/core/FormControlLabel';
// // import FormGroup from '@material-ui/core/FormGroup';
// // import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';

class Header extends Component {
  constructor(props){
    super(props);

    Header.propTypes = {
      toSearchPage: PropTypes.func.isRequired,
      toBookmark: PropTypes.func.isRequired,
      toHome: PropTypes.func.isRequired,
    }
    autoBind(this);
  }

  render() {
    return (
      <div>
      <AppBar position="static">
        <Toolbar>
          <Button size="large"
          onClick = {this.props.toHome}
          style={{
            color: 'white'
          }}
            >
            Home</Button>
          <Button size="large"
          onClick = {this.props.toSearchPage}
          style={{
            color: 'white'
          }}>Search</Button>
          <Button size="large"
          onClick = {this.props.toBookMark}
          style={{
            color: 'white'
          }}>Bookmark</Button>
          <IconButton style={{
            position: 'absolute',
            right: 12
          }}>
            <AccountCircle style={{
              color: 'white'
            }}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      </div>
    )
  }
}

export default Header