import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

// For selecting what to sort by
// pass in a prop with the id, the name, and the
class SortBySelect extends React.Component {
  state = {
    sortby: '',  // thing to sort by
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { inputValues, classes } = this.props;

    return (
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="sort-by-select">Sort by</InputLabel>
        <Select
          name="sortby"
          value={this.state.sortby}
          onChange={this.handleChange}
          inputProps={{
            name: "sortby",   // "value" needs to be the same as this.state."value"
            id: "sort-by-select",
          }}
          displayEmpty>
          {/* Default value if empty*/}
          <MenuItem value={""} key={"None"}><em>None</em></MenuItem>
          {inputValues.map(value => (
            <MenuItem value={value} key={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

SortBySelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

SortBySelect.defaultProps = {
  inputValues: [1, 2, 3],
};

export default withStyles(styles)(SortBySelect);
