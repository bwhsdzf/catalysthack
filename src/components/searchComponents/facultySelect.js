import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// Subject faculties
const faculties = [
  'Arts',
  'Science',
  'Commerce',
  'Education',
  'Engineering'
];

class FacultySelect extends React.Component {
  state = {
    faculty: [],
  };

  handleChange = event => {
    this.setState({ faculty: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-checkbox">Faculty</InputLabel>
        <Select
          multiple
          value={this.state.faculty}
          onChange={this.handleChange}
          input={<Input id="select-multiple-faculty-checkbox" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {faculties.map(item => (
            <MenuItem key={item} value={item}>
              <Checkbox checked={this.state.faculty.indexOf(item) > -1} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

FacultySelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FacultySelect);
// export default FacultySelect;
