import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 240,
  }
});

// For the search term
class SearchInput extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <FormControl className={classes.formControl}>
        {/* <InputLabel shrink htmlFor={inputId} >Level</InputLabel> */}
        <TextField
              id="search"
              name="search"
              label="Search"
              fullWidth
            />
      </FormControl>
    );
  }
}

SearchInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchInput);
