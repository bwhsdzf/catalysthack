import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// // import Switch from '@material-ui/core/Switch';
// // import FormControlLabel from '@material-ui/core/FormControlLabel';
// // import FormGroup from '@material-ui/core/FormGroup';
// // import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';

class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Button size="large" style={{
            color: 'white'
          }}>Home</Button>
          <Button size="large" style={{
            color: 'white'
          }}>Search</Button>
          <Button size="large" style={{
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
    )
  }
}

export default Header
