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

// Subject semesters
const semesters = [
  '1',
  '2',
  'Summer',
  'Winter',
];

class SemesterSelect extends React.Component {
  state = {
    semester: [],
  };

  handleChange = event => {
    this.setState({ semester: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-checkbox">Semester</InputLabel>
        <Select
          multiple
          value={this.state.semester}
          onChange={this.handleChange}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {semesters.map(semester => (
            <MenuItem key={semester} value={semester}>
              <Checkbox checked={this.state.semester.indexOf(semester) > -1} />
              <ListItemText primary={semester} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

SemesterSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SemesterSelect);
// export default SemesterSelect;
